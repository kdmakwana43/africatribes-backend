import {
  validation,
  compressPassword,
  createResponse,
  hasPassword,
} from "../config/common.js";
import Users from "../modals/user-sequelize.js";
import JWT from "jsonwebtoken";

export const userRegister = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      dob,
      gender,
      country,
      hometown,
      tribe,
      village,
    } = req.body;

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

    console.log("req.body", req.body);

    const condition = {
      email: email,
    };

    const alredayEmail = await Users.findOne({ where: condition });

    if (alredayEmail) {
      throw new Error(`Email is already exists! ${email}`);
    }

    const hasPass = await hasPassword(password, 10);

    const payload = {
      first_name,
      last_name,
      email: email.toLowerCase(),
      password: hasPass,
      dob,
      gender,
      country,
      hometown,
      tribe,
      village,
    };

    const regiaterUser = await Users.create(payload);

    createResponse(res, regiaterUser);
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

    const isPasswordValid = await compressPassword(password, user.password);

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

export const userUpdate = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      dob,
      gender,
      country,
      hometown,
      tribe,
      village,
      profile,
    } = req.body;

    validation(
      ["first_name", "last_name", "dob", "gender", "country"],
      req.body
    );
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
