import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const PricingModel = sequelize.define(
  "Pricing",
  {
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: {
          msg: "Price must be a valid decimal number",
        },
        min: {
          args: [0],
          msg: "Price must be a positive number",
        },
      },
    },
  },
  {
    tableName: "Pricing",
    timestamps: true,
  }
);

export default PricingModel