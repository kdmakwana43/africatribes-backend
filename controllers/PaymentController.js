import { Op } from "sequelize";
import { __ } from "../config/global.js";
import SubscriptionModel from "../models/SubscriptionModel.js";
// import Stripe from "stripe";
import Users from "../models/UserModel.js";

import { Paynow } from 'paynow';

let paynow = new Paynow(process.env.PAYNOW_ID, process.env.PAYNOW_INTEGRATION_KEY);
paynow.resultUrl = process.env.BASE_URL + "/payment/webhook";


// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2024-06-20",
// });

// Initialize payment and create PaymentIntent for Payment Sheet
export const paymentInit = async (req, res) => {
  try {
    
    const currency = "USD";
    const  amount = 20;
    const userId = req.Auth.id;


    const verificationToken = __.generateToken()
    
    paynow.returnUrl = `${process.env.FRONTEND_URL}/checkout/return/verification/${verificationToken}`;
    let payment = paynow.createPayment("Invoice 35");

    console.log("Creating payment for user:", paynow.returnUrl);

    console.log("Payment created:", payment);
    payment.add("Premium Subscription", 20);

    const paymentResponse = await paynow.send(payment)
    console.log("Payment response:", paymentResponse);
    if (!paymentResponse.success)  throw new Error("Payment failed");

    const paymentUrl = paymentResponse.redirectUrl;


    const subscription = await SubscriptionModel.create({
      userId,
      amount: parseFloat(amount).toFixed(2),
      currency: currency.toUpperCase(),
      paymentStatus: "Pending",
      paymentUrl: paymentUrl,
      pollUrl: paymentResponse.pollUrl,
      paymentMethod: "PayNow",
      verificationToken : verificationToken
    });
    __.res(res, { paymentUrl, id : subscription.id }, 200);
    

  } catch (error) {
    __._throwError(res, error);
  }
};

// Verify payment status and update subscription
export const verifyPayment = async (req, res) => {
  try {


    __.validation(["verificationToken"], req.body);


     // Find the subscription
    const subscription = await SubscriptionModel.findOne({
      where: { paymentMethod: "PayNow", paymentStatus: "Pending", userId: req.Auth.id, verificationToken : req.body.verificationToken },
      order: [["createdAt", "DESC"]],
    });

    if (!subscription) {
      return __._throwError(res, new Error("Subscription not found or paymentId mismatch"));
    }

    // Retrieve PaymentIntent from Stripe

    let transaction = await paynow.pollTransaction(subscription.pollUrl);
    console.log("Payment Status:", transaction);
    if (transaction && transaction.status === "paid") {
        await subscription.update({
          paymentStatus: "Completed",
          updatedAt: new Date(),
        });

        const user = await Users.findByPk(req.Auth.id);
      if (user) {
        await user.update({ isPremium: true });
      }
       __.res(res, { status: "success", message: "Payment verified and subscription updated" }, 200);
    } else {
      throw new Error("Payment not completed or failed");
    }

  } catch (error) {
    __._throwError(res, error);
  }
};

// Retrieve subscription status
export const getSubscriptionStatus = async (req, res) => {
  try {
    const { userId } = req.params;

    const subscription = await SubscriptionModel.findOne({
      where: { userId, paymentStatus: "Completed" },
      order: [["createdAt", "DESC"]],
    });

    if (!subscription) {
      return __.res(res, { isSubscribed: false }, 200);
    }

    __.res(res, {
      isSubscribed: true,
      subscription: {
        id: subscription.id,
        amount: subscription.amount,
        currency: subscription.currency,
        paymentStatus: subscription.paymentStatus,
        createdAt: subscription.createdAt,
      },
    }, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};