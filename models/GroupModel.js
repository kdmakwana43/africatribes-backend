import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Users from "./UserModel.js";
import GroupMembersModel from "./GroupMembersModel.js";
import GroupChatsModel from "./GroupChatsModel.js";

const GroupModel = sequelize.define(
  "Groups",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: { msg: "Group name cannot be empty" },
        len: { args: [3, 50], msg: "Group name must be between 3 and 50 characters" },
      },
    },
    creatorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: "id",
      },
      onDelete: "CASCADE",
    },
  },
  {
    tableName: "Groups",
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  }
);

// Associations
GroupModel.belongsTo(Users, { foreignKey: "creatorId", as: "creator" });
GroupModel.hasMany(GroupMembersModel, { foreignKey: "groupId", as: "members" });


export default GroupModel;