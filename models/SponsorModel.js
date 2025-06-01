import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const SponsorModel = sequelize.define(
  "Sponsor",
  {
    title: {
      type: DataTypes.TEXT,
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
    logo: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [0, 1000],
          msg: "Logo must be at most 1000 characters long",
        },
      },
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue : '',
      validate: {
        notNull: { msg: "url is required" },
        notEmpty: { msg: "url should not be empty" },
        len: {
          args: [3, 255],
          msg: "url must be between 3 and 255 characters",
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
    tableName: "Sponsors",
    timestamps: true,
  }
);

export default SponsorModel