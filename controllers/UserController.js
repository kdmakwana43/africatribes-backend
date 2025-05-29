import { __ } from "../config/global.js";
import { getOtpTemplate, sendEmail } from "../config/node-mailer.js";
import TokenModal from "../models/TokenModal.js";

import Users from "../models/UserModel.js";
import JWT from "jsonwebtoken";
import { Op } from "sequelize";

export const userRegister = async (req, res) => {
  try {
    __.validation(
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

    const hasPass = __.hasPassword(req.body.password, 10);

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

    __.res(res, "User registered successfully.", 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const userLogin = async (req, res) => {
  try {
    __.validation(["email", "password"], req.body);

    const condition = {
      email: req.body.email.toLowerCase(),
    };

    const user = await Users.findOne({ where: condition });

    if (!user) {
      throw new Error(`Email is not exit! Please check your Email.`);
    }

    const isPasswordValid = __.compressPassword(
      req.body.password,
      user.password
    );

    if (!isPasswordValid) {
      throw new Error("Invalid password! Please check your password.");
    }

    const token = JWT.sign({ id: user.id }, process.env.JWT_SECRET);

    const userResponse = {
      ...user.toJSON(),
      password: undefined,
      token,
    };

    __.res(res, userResponse, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const userProfileUpdate = async (req, res) => {
  try {
    const condition = {
      id: req.Auth.id,
    };

    const user = await Users.findOne({ where: condition });

    if (req.body.email) {
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
    __.res(res, authResponse(user.toJSON()), 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const userPasswordUpdate = async (req, res) => {
  try {
    __.validation(["old_password", "new_password"], req.body);

    const condition = {
      id: req.Auth.id,
    };

    const user = await Users.findOne({ where: condition });

    const isOldPasswordValid = __.compressPassword(
      req.body.old_password,
      user.password
    );

    if (!isOldPasswordValid) {
      throw new Error("Invalid old password.");
    }

    const pass = __.hasPassword(req.body.new_password);
    user.password = pass;

    await user.save();
    __.res(res, "Password Update Successfully.", 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const uploadFile = async (req, res) => {
  try {
    if (req.file) {
      __.res(res, process.env.BASE_URL + "/images/" + req.file.filename, 200);
    } else {
      throw new Error("Oops! Failed to upload File or image.");
    }
  } catch (error) {
    __._throwError(res, error);
  }
};
export const userForgotPassword = async (req, res) => {
  try {
    __.validation(["email"], req.body);

    const condition = {
      email: req.body.email.toLowerCase(),
    };

    const isExistUser = await Users.findOne({ where: condition });

    if (!isExistUser) {
      throw new Error(`Email is not exit! Please check your Email. `);
    }

    const token = __.generateToken();

    sendEmail(req.body.email, "Forgot Password", getOtpTemplate(token));

    const payload = {
      token: token,
      user: isExistUser.id,
    };

    await TokenModal.create(payload);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const userResetPassword = async (req, res) => {
  try {
    __.validation(["token", "new_password"], req.body);

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

    const pass = __.hasPassword(req.body.new_password);
    user.password = pass;

    await user.save();
    isExistToken.status = "Deactivated";
    await isExistToken.save();

    __.res(res, "Password reset successfully.", 200);
  } catch (error) {
    __._throwError(res, error);
  }
};
