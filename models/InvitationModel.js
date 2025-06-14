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
          args: [["Pending", "Approved",'Rejected']],
          msg: "Category must be either 'Pending' or 'Approved' or 'Rejected'.",
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

InvitationModel.belongsTo(Users, {
  foreignKey: "requestedTo",
  as: "requestedToUser",
});


// Method
InvitationModel.isAccepted = async function (userId, requestedTo) {
  const invitation = await this.findOne({
    where: {
      userId,
      requestedTo,
      status: "Approved",
    },
  });
  return !!invitation; 
};

export default InvitationModel;
