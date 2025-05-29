import { Op } from "sequelize";
import { __ } from "../config/global.js";
import Contacts from "../models/ContactUsModel.js";

export const addContact = async (req, res) => {
  try {

    __.validation(["first_name", "last_name", "email", "message"], req.body);

        const condition = {
          email: req.body.email.toLowerCase(),
          status : {
            [Op.ne]: 'Closed',
          }
        };

        const isExistUser = await Contacts.findOne({ where: condition });

        if (isExistUser) {
          throw new Error(
            `Your tickets already in progress! we will update you soon via mail.`
          );
        }

      const payload = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email.toLowerCase(),
        message: req.body.message,
      };

      await Contacts.create(payload);

    __.res(
      res,
      "Your message has been received. We’ll get back to you as soon as possible.",
      200
    );
  } catch (error) {
    __._throwError(res, error);
  }
};
