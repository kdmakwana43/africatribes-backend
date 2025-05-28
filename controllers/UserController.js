import {
  validation,
  compressPassword,
  createResponse,
  hasPassword,
} from "../config/common.js";
import Users from "../models/user-sequelize.js";
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
      throw new Error(`${req.body.email} is already registered! Please try another email.`);
    }

    const hasPass = hasPassword(req.body.password, 10);

    const payload = {
      first_name : req.body.first_name,
      last_name : req.body.last_name,
      email: req.body.email.toLowerCase(),
      password: hasPass,
      dob : req.body.dob,
      gender : req.body.gender,
      country : req.body.country,
      hometown : req.body.hometown || null,
      tribe : req.body.tribe || null,
      village : req.body.village || null,
    };

    const createdUser = await Users.create(payload);


    createResponse(res, 'User registered successfully.');
  } catch (error) {
    createResponse(res, error.message, 500);
    console.log(error.message, "error");
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    validation(["email", "password"], req.body);

    const condition = {
      email: email.toLowerCase(),
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
    const {
      first_name,
      id,
      last_name,
      dob,
      gender,
      country,
      hometown,
      tribe,
      village,
      profile,
      alias,
    } = req.body;

    validation(["first_name", "last_name", "dob", "gender", "id"], req.body);

    console.log("req", req.body);
    console.log("req.file", req.file);
    const user = await Users.findOne({ where: { id } });

    if (!user) {
      throw new Error("User not found");
    }

    user.first_name = first_name;
    user.last_name = last_name;
    user.dob = dob;
    user.gender = gender;
    user.country = country || null;
    user.hometown = hometown || null;
    user.tribe = tribe || null;
    user.village = village || null;

    user.alias = alias || null;
    if (req.file) {
      user.profile = req.file.filename;
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

    const isOldPasswordValid = await compressPassword(
      old_password,
      user.password
    );

    if (!isOldPasswordValid) {
      throw new Error("Invalid old password.");
    }

    const pass = await hasPassword(new_password);
    user.password = pass;

    await user.save();
    createResponse(res, "Password Update Successfully.");
  } catch (error) {
    createResponse(res, error.message, 500);
    console.log(error.message, "error");
  }
};
