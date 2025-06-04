import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Users from "./UserModel.js";
import Groups from "./GroupModel.js";

const GroupMembersModel = sequelize.define(
  "GroupMembers",
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
        model: "Groups",
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
    role: {
      type: DataTypes.ENUM("admin", "member"),
      allowNull: false,
      defaultValue: "member",
      validate: {
        isIn: {
          args: [["admin", "member"]],
          msg: "Role must be either 'admin' or 'member'",
        },
      },
    },
  },
  {
    tableName: "GroupMembers",
    timestamps: false,
    indexes: [
      {
        unique: true,
        fields: ["groupId", "userId"],
      },
    ],
  }
);

// Associations
GroupMembersModel.belongsTo(Users, { foreignKey: "userId", as: "user" });

export default GroupMembersModel;