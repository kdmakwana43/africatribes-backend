import express from "express";

import {
  UserController,
  ContactController,
  SponsorController,
  BlogController,
  PageController,
  FamilyTreeController,
  PaymentController,
  GroupChatController
} from "../controllers/__init__.js";

import JWT from "jsonwebtoken";
import Users from "../models/UserModel.js";
import upload from "../config/uploadFile.js";
import { __ } from "../config/global.js";
import InvitationModel from "../models/InvitationModel.js";

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


Router.post("/users", UserController.getUsers);
Router.post("/users/count", UserController.totalUsersCount);
Router.post("/lading-page/states", UserController.getLandingPageStates);
Router.post("/users/group", UserController.getUsersGroup);

// contribution
Router.post("/contribution/create", _auth, UserController.addContribution);
Router.post("/contribution/details", _auth, UserController.getContribution);
Router.post("/contributions", _auth, UserController.listContributions);
Router.post("/contribution/update", _auth, UserController.updateContribution);
Router.post("/contribution/delete", _auth, UserController.deleteContribution);
Router.post("/invitation/join-family", _auth, UserController.requestForJoinFamily);
Router.post("/invitation/count", _auth, UserController.getPendingInvitationCount);
Router.post("/invitations", _auth, UserController.getInvitationsList);
Router.post("/invitation/update", _auth, UserController.acceptOrRejectInvitation);
Router.post("/invitations/accepted", _auth, UserController.getAcceptedInvitations);
Router.post("/invitation/delete", _auth, UserController.deleteInvitation);
Router.post("/invitations/suggested", _auth, UserController.getSuggestedRelations);

Router.post("/search/all", UserController.searchFromAll);




// FamilyTree
Router.post(
  "/family/create",
  _auth,
  upload.single("profile"),
  _familyPermission,
  FamilyTreeController.addFamilyNode
);
Router.post("/family/tree",_auth,_familyPermission,FamilyTreeController.getFamilyTrees);
Router.post("/family/member/delete",_auth,_familyPermission,FamilyTreeController.deleteFamilyNode);
Router.post("/family/member/update",_auth,_familyPermission,upload.single("profile"),FamilyTreeController.updateFamilyNode);
Router.post("/family/member/move",_auth,_familyPermission,FamilyTreeController.moveChildNode);
Router.post("/family/member/create-parent",_auth,_familyPermission,upload.single("profile"),FamilyTreeController.createParentNode);
Router.post("/family/member/create-sibling",_auth,_familyPermission,upload.single("profile"),FamilyTreeController.createSibling);
Router.post("/family/members",_auth,_familyPermission,FamilyTreeController.getFamilyMembers);
Router.post("/family/premium/tree",_auth,_familyPermission,FamilyTreeController.getFamilyBalkanTree);
Router.post("/family/premium/tree-balkan",_auth,_familyPermission,FamilyTreeController.getFamilyBalkanTreeBalkan);
Router.post("/family/premium/save-tree",_auth,_familyPermission,FamilyTreeController.createBalkanNewNodes);


Router.post("/family/tree/public",FamilyTreeController.getFamilyTreesPublic);
Router.post("/family/tree/create-member",FamilyTreeController.createNewFamilyNodes);




// contact
Router.post("/contact", ContactController.addContact);

// file upload
Router.post("/upload-file", upload.single("file"), UserController.uploadFile);

// sponsors
Router.post("/get/sponsors", SponsorController.getSponsors);


// Blogs
Router.post("/blogs", BlogController.getBlogs);

// Pricing
Router.post("/pricing/", PaymentController.getPlanPricing);


// Pages
Router.post("/page/about-us", PageController.getAboutUsPage);
Router.post("/page/faqs", PageController.getFAQs);
Router.post("/page/pricing-options", PageController.getPricingOptions);
Router.post("/page/privacy-policies", PageController.getPrivacyPolicies);
Router.post("/page/terms-and-conditions", PageController.getTermsAndConditions);
Router.post("/page/why-afrikatribs", PageController.getWhyAfrikaTribes);
Router.post("/page/disclaimers", PageController.getDisclaimers);
Router.post("/page/contact-us", PageController.getContactUsPage);
Router.post("/page/banners", PageController.getBanners);


// Group Chat
Router.post("/chats/group/create", _auth, GroupChatController.createGroup);
Router.post("/chats/groups", _auth, GroupChatController.getGroups);
Router.post("/chats/group-details", _auth, GroupChatController.groupDetails);
Router.post("/chats/messages", _auth, GroupChatController.getGroupChats);
Router.post("/chats/history", _auth, GroupChatController.getGroupChatsConversation);
Router.post("/chats/group/add-members", _auth, GroupChatController.addMember);
Router.post("/chats/group/remove-member", _auth, GroupChatController.removeMember);
Router.post("/chats/member/role-change", _auth, GroupChatController.changeRole);
Router.post("/chats/group/delete", _auth, GroupChatController.deleteGroup);

// Payments
Router.post("/payment/init-payment-sheet", _auth, PaymentController.paymentInit);
Router.post("/payment/verification", _auth, PaymentController.verifyPayment);
Router.post("/payment/active-subscription", _auth, PaymentController.getSubscriptionStatus);


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

async function _familyPermission(req, res, next) {

  console.log('req.body',req.body)

  try {

    console.log('req.body.userId',req.body.userId,req.Auth.id)
    
    if(req.body.userId){
      const isAccepted = await InvitationModel.isAccepted(req.body.userId, req.Auth.id);
      console.log('isAccepted',isAccepted)
      if(isAccepted){
        req.Auth.id = Number(req.body.userId);
      }
    }
    console.log('req.Auth.id',req.Auth.id)
    next();
  } catch (error) {
    next()
    // __._throwError(res, error);
  }
}

export default Router;
