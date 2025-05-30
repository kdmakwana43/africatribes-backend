import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Users from "./UserModel.js";

const InvitationSchema = sequelize.define(
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
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "Invitations",
    timestamps: true,
  }
);

// Associations
InvitationSchema.belongsTo(Users, {
  foreignKey: "userId",
  as: "user",
});

export default InvitationSchema;
