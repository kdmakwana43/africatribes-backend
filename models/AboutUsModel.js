import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const AboutUsModel = sequelize.define(
  "AboutUs",
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
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Content is required." }
      }
    },
    corporate: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Content is required." }
      }
    },
     vision: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: [],
    },
      mission: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: [],
    },
    objectives: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: [],
    },
  },
 
  {
    tableName: "AboutUs",
    timestamps: true,
  }
);

export default AboutUsModel;
