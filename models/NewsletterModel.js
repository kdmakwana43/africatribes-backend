import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const NewsletterModel = sequelize.define(
  "Newsletter",
  {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        msg: "This email is already subscribed.",
      },
      validate: {
        notEmpty: { msg: "Email is required." },
        isEmail: { msg: "Please provide a valid email address." },
        len: {
          args: [5, 100],
          msg: "Email must be between 5 and 100 characters.",
        },
      },
    },
  },
  {
    tableName: "Newsletter",
    timestamps: true,
  }
);

export default NewsletterModel;
