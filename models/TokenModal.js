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
    timestamps: true,
  }
);

export default TokenModal;
