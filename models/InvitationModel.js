import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Users from "./UserModel.js";

const InvitationModel = sequelize.define(
  "Invitations",
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
    requestedTo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    status: {
      type: DataTypes.ENUM("Pending", "Approved","Rejected"),
      allowNull: false,
      validate: {
        isIn: {
          args: [["Pending", "Approved"]],
          msg: "Category must be either 'Pending' or 'Approved'.",
        },
      },
    },
  },
  {
    tableName: "Invitations",
    timestamps: true,
  }
);

// Associations
InvitationModel.belongsTo(Users, {
  foreignKey: "userId",
  as: "user",
});

export default InvitationModel;
