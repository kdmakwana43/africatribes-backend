import { createResponse, validation } from "../config/common.js";
import Contacts from "../models/ContactUsModel.js";

export const addContact = async (req, res) => {
  try {
    console.log("req", req.body);

    validation(["first_name", "last_name", "email", "message"], req.body);

    //     const condition = {
    //       email: req.body.email.toLowerCase(),
    //     };

    //     const isExistUser = await Contacts.findOne({ where: condition });

    //     if (isExistUser) {
    //       throw new Error(
    //         `${req.body.email} is already exits! Please try another email.`
    //       );
    //     }

    const payload = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email.toLowerCase(),
      message: req.body.message,
    };

    await Contacts.create(payload);

    createResponse(
      res,
      "Your message has been received. We’ll get back to you as soon as possible."
    );
  } catch (error) {
    createResponse(res, error.message, 500);
    console.log(error.message, "error");
  }
};
