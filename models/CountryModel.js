import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const CountryModel = sequelize.define("Country", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: { msg: "Name is required" },
      notEmpty: { msg: "Name should not be empty" },
      len: {
        args: [2, 100],
        msg: "Name must be between 2 and 100 characters",
      },
    },
  },
  status: {
    type: DataTypes.ENUM("Active", "Deactivate"),
    allowNull: false,
    defaultValue: "Active",
    validate: {
      isIn: {
        args: [["Active", "Deactivate"]],
        msg: "Status must be either Active or Deactivate",
      },
    },
  },
}, {
  tableName: "Countries",
  timestamps: true,
});

export default CountryModel;
