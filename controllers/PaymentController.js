import { Op } from "sequelize";
import { __ } from "../config/global.js";
import SubscriptionModel from "../models/SubscriptionModel.js";
import Stripe from "stripe";
import Users from "../models/UserModel.js";

import { Paynow } from 'paynow';

let paynow = new Paynow("21110", "8b9e6708-4a19-4b59-b5da-380f5148df96");
paynow.resultUrl = "http://localhost:8080/api/gateways/paynow/update";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

// Initialize payment and create PaymentIntent for Payment Sheet
export const paymentInit = async (req, res) => {
  try {
    
    const currency = "ZWL";
    const  amount = 20;
    const userId = req.Auth.id;
    
    paynow.returnUrl = "http://localhost:3000/checkout/return/verification";
    let payment = paynow.createPayment("Invoice 35");

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
    });
    __.res(res, { paymentUrl, id : subscription.id }, 200);
    

    // const amountInCents = Math.round(parseFloat(amount) * 100);

    // const customer = await stripe.customers.create({
    //   email: req.Auth.email,
    //   name: req.Auth.first_name + " " + req.Auth.last_name,
    // });

    // const paymentIntent = await stripe.paymentIntents.create({
    //   amount: amountInCents,
    //   currency: currency.toLowerCase(),
    //   payment_method_types: ["card"],
    //   customer: customer.id,
    //   automatic_payment_methods: {
    //     enabled: false,
    //   },
    //   metadata: {
    //     userId: userId.toString(),
    //     amount: amount.toString(),
    //     currency,
    //   },
    // });

    // const subscription = await SubscriptionModel.create({
    //   userId,
    //   amount: parseFloat(amount).toFixed(2),
    //   currency: currency.toUpperCase(),
    //   paymentStatus: "Pending",
    //   paymentId: paymentIntent.id,
    //   paymentMethod: "Stripe",
    // });

    // __.res(res, {
    //   clientSecret: paymentIntent.client_secret,
    //   publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    //   subscriptionId: subscription.id,
    //   paymentIntentId: paymentIntent.id, // Return PaymentIntent ID for frontend
    // }, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

// Verify payment status and update subscription
export const verifyPayment = async (req, res) => {
  try {

    __.validation(['subscriptionId'], req.body);
     const { subscriptionId } = req.body;

     // Find the subscription
    const subscription = await SubscriptionModel.findOne({
      where: { id: subscriptionId, paymentMethod: "PayNow", paymentStatus: "Pending" },
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

    // const { paymentIntentId, subscriptionId } = req.body;

    // // Validate request body
    // if (!paymentIntentId || !subscriptionId) {
    //   return __._throwError(res, new Error("paymentIntentId and subscriptionId are required"));
    // }

    // // Find the subscription
    // const subscription = await SubscriptionModel.findOne({
    //   where: { id: subscriptionId, paymentId: paymentIntentId },
    // });

    // if (!subscription) {
    //   return __._throwError(res, new Error("Subscription not found or paymentId mismatch"));
    // }

    // // Retrieve PaymentIntent from Stripe
    // const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);

    // console.log("PaymentIntent Status:", paymentIntent.status);

    // // Check payment status
    // if (paymentIntent.status === "succeeded") {
    //   // Update subscription to Completed
    //   await subscription.update({
    //     paymentStatus: "Completed",
    //     updatedAt: new Date(),
    //   });

    //   // Update user to premium
    //   const user = await Users.findByPk(req.Auth.id);
    //   if (user) {
    //     await user.update({ isPremium: true });
    //   }
    //   __.res(res, { status: "success", message: "Payment verified and subscription updated" }, 200);

    // } else if (paymentIntent.status === "requires_payment_method" || paymentIntent.status === "requires_confirmation") {
      
    //   await subscription.update({ paymentStatus: "Failed" });
    //   __._throwError(res, new Error("Payment failed or requires additional action"));

    // } else {

    //   await subscription.update({ paymentStatus: "Pending" });
    //   __._throwError(res, new Error(`Payment is in ${paymentIntent.status} status`));

    // }
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