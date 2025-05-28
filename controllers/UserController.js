import {
  validation,
  compressPassword,
  createResponse,
  hasPassword,
  authResponse,
  generateToken,
} from "../config/common.js";
import { getOtpTemplate, sendEmail } from "../config/node-mailer.js";
import TokenModal from "../models/TokenModal.js";

import Users from "../models/UserModel.js";
import JWT from "jsonwebtoken";
import { Op } from "sequelize";

export const userRegister = async (req, res) => {
  try {
    validation(
      [
        "first_name",
        "last_name",
        "email",
        "password",
        "dob",
        "gender",
        "country",
      ],
      req.body
    );

    const condition = {
      email: req.body.email.toLowerCase(),
    };

    const isExistUser = await Users.findOne({ where: condition });

    if (isExistUser) {
      throw new Error(
        `${req.body.email} is already registered! Please try another email.`
      );
    }

    const hasPass = hasPassword(req.body.password, 10);

    const payload = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email.toLowerCase(),
      password: hasPass,
      dob: req.body.dob,
      gender: req.body.gender,
      country: req.body.country,
      hometown: req.body.hometown || null,
      tribe: req.body.tribe || null,
      village: req.body.village || null,
    };

    await Users.create(payload);

    createResponse(res, "User registered successfully.");
  } catch (error) {
    createResponse(res, error.message, 500);
    console.log(error.message, "error");
  }
};

export const userLogin = async (req, res) => {
  try {
    validation(["email", "password"], req.body);

    const condition = {
      email: req.body.email.toLowerCase(),
    };

    const user = await Users.findOne({ where: condition });

    if (!user) {
      throw new Error(`Email is not exit! Please check your Email.`);
    }

    const isPasswordValid = compressPassword(req.body.password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password! Please check your password.");
    }

    const token = JWT.sign({ id: user.id }, process.env.JWT_SECRET);

    const userResponse = {
      ...user.toJSON(),
      password: undefined,
      token,
    };

    createResponse(res, userResponse);
  } catch (error) {
    console.log(error.message, "error");
    createResponse(res, error.message, 500);
  }
};

export const userProfileUpdate = async (req, res) => {
  try {
    console.log(req.body, req.body);

    const condition = {
      id: req.Auth.id,
    };

    const user = await Users.findOne({ where: condition });
    console.log("req.body", req.body);

    if (req.body.email) {
      console.log(req.body.email, "email");

      const emailCondition = {
        email: req.body.email,
        id: {
          [Op.ne]: req.Auth.id,
        },
      };

      const isExist = await Users.findOne({ where: emailCondition });
      if (isExist) {
        throw new Error(
          `This User is already associated with ${req.body.email}`
        );
      }
    }

    const NOT_ALLOW_UPDATE = [
      "id",
      "__v",
      "createdAt",
      "updatedAt",
      "password",
      "status",
    ];

    // Update fields
    Object.keys(req.body).forEach((key) => {
      if (NOT_ALLOW_UPDATE.indexOf(key) == -1) {
        user[key] = req.body[key];
      }
    });

    await user.save();
    createResponse(res, authResponse(user.toJSON()));
  } catch (error) {
    createResponse(res, error.message, 500);
    console.log(error.message, "error");
  }
};

export const userPasswordUpdate = async (req, res) => {
  try {
    const { old_password, new_password, id } = req.body;

    validation(["old_password", "new_password", "id"], req.body);

    const user = await Users.findOne({ where: { id: id } });

    const isOldPasswordValid = compressPassword(old_password, user.password);

    if (!isOldPasswordValid) {
      throw new Error("Invalid old password.");
    }

    const pass = hasPassword(new_password);
    user.password = pass;

    await user.save();
    createResponse(res, "Password Update Successfully.");
  } catch (error) {
    createResponse(res, error.message, 500);
    console.log(error.message, "error");
  }
};

export const userForgotPassword = async (req, res) => {
  try {
    validation(["email"], req.body);

    const condition = {
      email: req.body.email.toLowerCase(),
    };

    const isExistUser = await Users.findOne({ where: condition });

    if (!isExistUser) {
      throw new Error(`Email is not exit! Please check your Email. `);
    }

    const token = generateToken();

    sendEmail(req.body.email, "Forgot Password", getOtpTemplate(token));

    const payload = {
      token: token,
      user: isExistUser.id,
    };

    await TokenModal.create(payload);

    console.log("token10", token);
  } catch (error) {
    createResponse(res, error.message, 500);
  }
};

export const userResetPassword = async (req, res) => {
  try {
    validation(["token", "new_password"], req.body);

    const condition = {
      token: req.body.token,
      status: "Active",
    };

    const isExistToken = await TokenModal.findOne({ where: condition });

    if (!isExistToken) {
      throw new Error(`Invalid token!`);
    }

    const user = await Users.findOne({ where: { id: isExistToken.user } });

    if (!user) {
      throw new Error(`User not found!`);
    }

    const pass = hasPassword(req.body.new_password);
    user.password = pass;

    await user.save();
    isExistToken.status = "Deactivated";
    await isExistToken.save();

    createResponse(res, "Password reset successfully.");
  } catch (error) {
    createResponse(res, error.message, 500);
    console.log(error.message, "error");
  }
};
