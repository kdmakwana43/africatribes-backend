import express from "express";

import {
  UserController,
  ContactController,
  SponsorController,
  BlogController,
} from "../controllers/__init__.js";

import JWT from "jsonwebtoken";
import Users from "../models/UserModel.js";
import upload from "../config/uploadFile.js";
import { __ } from "../config/global.js";

const Router = express.Router();
// users
Router.post("/user/register", UserController.userRegister);
Router.post("/user/login", UserController.userLogin);
Router.post("/user/password/update", _auth, UserController.userPasswordUpdate);
Router.post("/user/get/profile", _auth, UserController.getUserProfile);
Router.post(
  "/user/profile/update",
  _auth,
  upload.single("profile"),
  UserController.userProfileUpdate
);
Router.post("/user/forgot/password", UserController.userForgotPassword);
Router.post("/user/reset/password", UserController.userResetPassword);
Router.post("/countries", UserController.getCountries);
Router.post("/newsletter/subscribe", UserController.subscribeNewsletter);

// contribution
Router.post("/contribution/create", _auth, UserController.addContribution);
Router.post("/contribution/details", _auth, UserController.getContribution);
Router.post("/contributions", _auth, UserController.listContributions);
Router.post("/contribution/update", _auth, UserController.updateContribution);
Router.post("/contribution/delete", _auth, UserController.deleteContribution);


// contact
Router.post("/contact", ContactController.addContact);

// file upload
Router.post("/upload-file", upload.single("file"), UserController.uploadFile);

// sponsors
Router.post("/get/sponsors", SponsorController.getSponsors);


// Blogs
Router.post("/blogs", BlogController.getBlogs);


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
    __._throwError(res, error);
  }
}

export default Router;
