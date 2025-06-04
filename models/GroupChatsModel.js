import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Users from "./UserModel.js";
import Groups from "./GroupModel.js";

const GroupChatsModel = sequelize.define(
  "GroupChats",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Groups,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Message cannot be empty" },
      },
    },
  },
  {
    tableName: "GroupChats",
    timestamps: true,
    createdAt: "sentAt",
    updatedAt: false,
  }
);

// Associations
GroupChatsModel.belongsTo(Users, { foreignKey: "userId", as: "sender" });
GroupChatsModel.belongsTo(Groups, { foreignKey: "groupId", as: "group" });

export default GroupChatsModel;