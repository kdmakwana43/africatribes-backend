import { __ } from "../config/global.js";
import SponsorModel from "../models/SponsorModel.js";

export const getSponsors = async (req, res) => {
  try {
    const sponsor = await SponsorModel.findAll({ where: { status: "Active" } });

    __.res(res, sponsor, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};
