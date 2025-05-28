import {
  validation,
  compressPassword,
  createResponse,
  hasPassword,
} from "../config/common.js";
import Users from "../models/UserModel.js";
import JWT from "jsonwebtoken";

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
      throw new Error(`Email is not exit! Please check your Number.`);
    }

    const isPasswordValid = compressPassword(req.body.password, user.password);

    if (!isPasswordValid) {
      throw new Error("Invalid password! Please check your password.");
    }

    const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET);

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
    validation(["first_name", "last_name", "dob", "gender", "id"], req.body);

    console.log("req", req.body);
    console.log("req.file", req.file);

    const condition = {
      id: req.body.id,
    };

    const user = await Users.findOne({ where: { condition } });

    if (!user) {
      throw new Error("User not found");
    }

    user.first_name = req.body.first_name;
    user.last_name = req.body.last_name;
    user.dob = req.body.dob;
    user.gender = req.body.gender;
    user.country = req.body.country || null;
    user.hometown = req.body.hometown || null;
    user.tribe = req.body.tribe || null;
    user.village = req.body.village || null;

    user.alias = req.body.alias || null;
    if (req.file) {
      user.profile = req.body.req.file.filename;
    } else {
      user.profile = null;
    }
    await user.save();
    createResponse(res, "Profile update successfully.");
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
