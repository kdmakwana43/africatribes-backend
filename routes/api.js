import express from "express";

import { UserController } from "../controllers/__init__.js";

import JWT from "jsonwebtoken";
import Users from "../models/UserModel.js";
import { createResponse } from "../config/common.js";
import upload from "../config/uploadFile.js";
const Router = express.Router();

Router.post("/user/register", UserController.userRegister);
Router.post("/user/login", UserController.userLogin);
Router.post("/user/reset/password", UserController.userPasswordUpdate);
Router.post(
  "/user/profile/update",
  _auth,
  upload.none(),
  UserController.userProfileUpdate
);



Router.post("/upload-file", upload.single("file"), UserController.uploadFile);

// middleware

async function _auth(req, res, next) {
  try {
    const token = req.headers["authorization"];
    if (!token) {
      throw new Error("Unauthorized access");
    }

    const decode = JWT.verify(token, process.env.JWT_SECRET);
    if (!decode) {
      throw new Error("Invalid Token");
    }
    const userId = decode.id;
    const user = await Users.findByPk(userId);
    if (!user) {
      throw new Error("User not found");
    }
    req.Auth = user.toJSON();
    next();
  } catch (error) {
    createResponse(res, error.message, 500);
  }
}

export default Router;
