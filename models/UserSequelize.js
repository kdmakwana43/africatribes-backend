import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const Users = sequelize.define(
  "Users",
  {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50],
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [0, 50],
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
        len: [5, 100],
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 100],
      },
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("male", "female"),

    },
    country: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 100],
      },
    },
    hometown: {
      type: DataTypes.STRING,
      defaultValue: "",
      validate: {
        len: [0, 100],
      },
    },
    tribe: {
      type: DataTypes.STRING,
      defaultValue: "",
      validate: {
        len: [0, 100],
      },
    },
    village: {
      type: DataTypes.STRING,
      defaultValue: "",
      validate: {
        len: [0, 100],
      },
    },
    profile: {
      type: DataTypes.STRING,
      defaultValue: "",
      validate: {
        len: [0, 255],
      },
    },
    alias: {
      type: DataTypes.STRING,
      validate: {
        len: [0, 100],
      },
    },
  },
  {
    timestamps: true, 
    tableName: "Users",
    hooks: {
      beforeCreate: (user) => {
        if (user.email) user.email = user.email.toLowerCase();
      },
      beforeUpdate: (user) => {
        if (user.email) user.email = user.email.toLowerCase();
      },
    },
  }
);

export default Users;
