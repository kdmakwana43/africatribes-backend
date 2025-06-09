import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const BannerModel = sequelize.define(
  "Banners",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: { msg: "Title is required" },
        notEmpty: { msg: "Title should not be empty" },
        len: {
          args: [3, 255],
          msg: "Title must be between 3 and 255 characters",
        },
      },
    },
    banner: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [0, 1000],
          msg: "banner must be at most 1000 characters banner",
        },
      },
    },
    url: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: {
          args: [0, 1000],
          msg: "URL must be at most 1000 characters",
        },
      },
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
    tableName: "Banners",
    timestamps: true,
  }
);

export default BannerModel