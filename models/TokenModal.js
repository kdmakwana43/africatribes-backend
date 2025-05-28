import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const TokenModal = sequelize.define(
  "Token",
  {
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("Active", "Deactivated"),
      defaultValue: "Active",
    },
  },
  {
    timestamps: true,
  }
);

export default TokenModal;
