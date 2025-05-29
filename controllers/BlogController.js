import { __ } from "../config/global.js";
import BlogModel from "../models/BlogModel.js";

export const getBlogs = async (req, res) => {
  try {
    const { skip = 0, limit = 10, sort = "createdAt:DESC" } = req.body;

    const [sortField, sortOrder] = sort.split(":");

    const condition = {
      status: "Active",
    };

    if(req.body.trending != undefined){
      condition.trending = req.body.trending
    }

    const blogs = await BlogModel.findAll({
      where: condition,
      offset: parseInt(skip),
      limit: parseInt(limit),
      order: [[sortField || "createdAt", sortOrder?.toUpperCase() || "DESC"]],
    });

    __.res(res, blogs, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};
