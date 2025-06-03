import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Users from "./UserModel.js";

const SubscriptionModel = sequelize.define(
  "Subscriptions",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
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
    amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: {
          msg: "Amount must be a valid decimal number",
        },
        min: {
          args: [0],
          msg: "Amount must be a positive number",
        },
      },
    },
    paymentStatus: {
      type: DataTypes.ENUM("Pending", "Completed", "Failed", "Refunded"),
      allowNull: false,
      defaultValue: "Pending",
      validate: {
        isIn: {
          args: [["Pending", "Completed", "Failed", "Refunded"]],
          msg: "Payment status must be one of: Pending, Completed, Failed, Refunded",
        },
      },
    },
    paymentId: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
      validate: {
        notEmpty: {
          msg: "Payment ID cannot be empty if provided",
        },
      },
    },
    paymentMethod: {
      type: DataTypes.ENUM("Stripe"),
      allowNull: false,
      validate: {
        isIn: {
          args: [["Stripe"]],
          msg: "Payment method must be one of: Stripe",
        },
      },
    },
    currency: {
      type: DataTypes.STRING(3),
      allowNull: false,
      defaultValue: "USD",
      validate: {
        is: {
          args: /^[A-Z]{3}$/,
          msg: "Currency must be a valid 3-letter ISO code (e.g., USD, INR)",
        },
      },
    },
  },
  {
    tableName: "Subscriptions",
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
  }
);

// Associations
SubscriptionModel.belongsTo(Users, {
  foreignKey: "userId",
  as: "user",
});

export default SubscriptionModel;