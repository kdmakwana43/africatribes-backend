import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
// import sequelize from "../config/database.js";

const ContactUsModel = sequelize.define(
  "Contacts",
  {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 50],
          msg: "First name must be between 2 and 50 characters long.",
        },
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 50],
          msg: "Last name can have up to 50 characters.",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Please provide a valid email address.",
        },
        len: {
          args: [5, 100],
          msg: "Email must be between 5 and 100 characters long.",
        },
      },
    },

    message: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 500],
          msg: "Message can have up to 500 characters.",
        },
      },
    },

    status: {
        type: DataTypes.ENUM("New", "In Progress","Closed"),
        allowNull: false,
        defaultValue: "New",
        validate: {
          isIn: {
            args: [["New", "In Progress","Closed"]],
            msg: "Status must be either New,In Progress or Closed",
          },
        },
      },

  },
  {
    timestamps: true,
    tableName: "Contacts",
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

export default ContactUsModel;
