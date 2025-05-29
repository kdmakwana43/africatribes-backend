import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const BlogModel = sequelize.define(
  "Blogs",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Title is required." },
        len: {
          args: [2, 255],
          msg: "Title must be between 2 and 255 characters.",
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Description is required." },
        len: {
          args: [1, 500],
          msg: "Description cannot exceed 500 characters.",
        },
      },
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true,
      },
    },
    author: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [0, 100],
          msg: "Author name can have up to 100 characters.",
        },
      },
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [0, 255],
          msg: "Image URL can have up to 255 characters.",
        },
      },
    },
    blog_url: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [0, 500],
          msg: "URL can have up to 500 characters.",
        },
      },
    },
    status: {
      type: DataTypes.ENUM("Active", "Deactivate"),
      allowNull: false,
      defaultValue: "Active",
      validate: {
        isIn: {
          args: [["Active", "Deactivate"]],
          msg: "Status must be either Active or Deactivate.",
        },
      },
    },
    trending: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  },
  {
    tableName: "Blogs",
    timestamps: true,
  }
);

export default BlogModel;
