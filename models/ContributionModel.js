import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Users from "./UserModel.js";

const ContributionModel = sequelize.define(
  "Contribution",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 255],
          msg: "Title must be between 2 and 255 characters.",
        },
      },
    },
    category: {
      type: DataTypes.ENUM("Places", "People"),
      allowNull: false,
      validate: {
        isIn: {
          args: [["Places", "People"]],
          msg: "Category must be either 'Places' or 'People'.",
        },
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "Contributions",
    timestamps: true,
  }
);

// Associations
ContributionModel.belongsTo(Users, {
  foreignKey: "userId",
  as: "user",
});

export default ContributionModel;
