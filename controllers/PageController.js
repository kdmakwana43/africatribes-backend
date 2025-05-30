import { __ } from "../config/global.js";
import AboutUsModel from "../models/AboutUsModel.js";
import BannerModel from "../models/BannerModel.js";
import DisclaimerPageModel from "../models/DisclaimerPageModel.js";
import FAQModel from "../models/FAQModel.js";
import PricingOptionPageModel from "../models/PricingOptionPageModel.js";
import PrivacyPolicyPageModel from "../models/PrivacyPolicyPageModel.js";
import TermsAndConditionPageModel from "../models/TermsAndConditionPageModel.js";
import WhyAfrikatribePageModel from "../models/WhyAfrikatribePageModel.js";

export const getAboutUsPage = async (req, res) => {
  try {

    const aboutUsPage = await AboutUsModel.findOne({
      order: [["createdAt", "DESC"]]
    });

    __.res(res, aboutUsPage, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};



export const getFAQs = async (req, res) => {
  try {

    const faqs = await FAQModel.findAll({
      where : {status : 'Active'},
      // order: [["createdAt", "DESC"]]
    });

    __.res(res, faqs, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};



export const getPricingOptions = async (req, res) => {
  try {

    const pageData = await PricingOptionPageModel.findOne({
      order: [["createdAt", "DESC"]]
    });

    __.res(res, pageData, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};


export const getPrivacyPolicies = async (req, res) => {
  try {

    const pageData = await PrivacyPolicyPageModel.findOne({
      order: [["createdAt", "DESC"]]
    });

    __.res(res, pageData, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};


export const getTermsAndConditions = async (req, res) => {
  try {

    const pageData = await TermsAndConditionPageModel.findOne({
      order: [["createdAt", "DESC"]]
    });

    __.res(res, pageData, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};


export const getWhyAfrikaTribes = async (req, res) => {
  try {

    const pageData = await WhyAfrikatribePageModel.findOne({
      order: [["createdAt", "DESC"]]
    });

    __.res(res, pageData, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};


export const getDisclaimers = async (req, res) => {
  try {

    const pageData = await DisclaimerPageModel.findOne({
      order: [["createdAt", "DESC"]]
    });

    __.res(res, pageData, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};


export const getBanners = async (req, res) => {
  try {

    const { skip = 0, limit = 10, sort = "createdAt:DESC" } = req.body;
    const [sortField, sortOrder] = sort.split(":");

   
    const condition = {
      status: "Active",
    };

     const pageData = await BannerModel.findAll({
      where: condition,
      offset: parseInt(skip),
      limit: parseInt(limit),
      order: [[sortField || "createdAt", sortOrder?.toUpperCase() || "DESC"]],
    });


    __.res(res, pageData, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};
