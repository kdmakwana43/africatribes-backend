import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Users = sequelize.define(
  "Users",
  {
    first_name: {
      type: DataTypes.STRING,
    },
    last_name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
    },

    dob: {
      type: DataTypes.DATEONLY,
    },
    gender: {
      type: DataTypes.ENUM("male", "female", "other"),
    },
    country: {
      type: DataTypes.STRING,
    },
    hometown: {
      type: DataTypes.STRING,
    },
    tribe: {
      type: DataTypes.STRING,
    },
    village: {
      type: DataTypes.STRING,
    },
    profile: {
      type: DataTypes.STRING,
      defaultValue: "",
    },
    alias: {
      type: DataTypes.STRING,
    },
  },
  {
    hooks: {
      beforeCreate: (user) => {
        user.email = user.email.toLowerCase();
      },
      beforeUpdate: (user) => {
        user.email = user.email.toLowerCase();
      },
    },
  }
);

export default Users;
