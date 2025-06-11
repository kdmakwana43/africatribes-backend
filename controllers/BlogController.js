import { Op, fn, col, where } from "sequelize";
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

    if (req.body.search && req.body.search.trim() !== '') {
      const searchTerm = req.body.search.trim();
       condition[Op.or]= [
          { title: { [Op.like]: `%${searchTerm}%` } },
          { description: { [Op.like]: `%${searchTerm}%` } },
          { author: { [Op.like]: `%${searchTerm}%` } },
          { blog_url: { [Op.like]: `%${searchTerm}%` } },
        ]
    }

    console.log('condition',condition)

    const blogs = await BlogModel.findAll({
      where: condition,
      offset: parseInt(skip),
      limit: parseInt(limit),
      order: [[sortField || "createdAt", sortOrder?.toUpperCase() || "DESC"]],
    });

    if(req.body.wantCount){

      const totalMatchCount = await BlogModel.count({
        where: condition,
      });
      __.res(res, {blogs, totalMatchCount}, 200);

    } else {
      __.res(res, blogs, 200);
    }

  } catch (error) {
    __._throwError(res, error);
  }
};
