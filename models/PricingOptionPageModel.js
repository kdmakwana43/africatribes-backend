import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const PricingOptionPageModel = sequelize.define(
  "PricingOptionPage",
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
    sentence: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "sentence is required." }
      }
    },
    sortDescription: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Description is required." }
      }
    },
    
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Content is required." }
      }
    },
  },
 
  {
    tableName: "PricingOptionPage",
    timestamps: true,
  }
);

export default PricingOptionPageModel;
