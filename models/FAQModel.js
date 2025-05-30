import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const FAQModel = sequelize.define(
  "FAQs",
  {
    question: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Question is required." }
      }
    },
    answer: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Anser is required." }
      }
    },
    status: {
      type: DataTypes.ENUM('Active', 'Deactivate'),
      allowNull: false,
      defaultValue: 'Active',
      validate: {
        isIn: {
          args: [['Active', 'Deactivate']],
          msg: 'Status must be either Active or Deactivate'
        }
      }
    }
   
  },
 
  {
    tableName: "FAQs",
    timestamps: true,
  }
);

export default FAQModel;
