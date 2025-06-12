import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Users from "./UserModel.js";

const FamilyTreesModel = sequelize.define(
  "FamilyTrees",
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
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    parentId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "FamilyTrees",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [1, 50],
          msg: "Surname must be between 1 and 50 characters long.",
        },
      },
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    dod: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    birthTown: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profession: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    profile: {
      type: DataTypes.STRING,
      defaultValue: "",
      validate: {
        len: {
          args: [0, 255],
          msg: "Profile URL can have up to 255 characters.",
        },
      },
    },
    gender: {
      type: DataTypes.ENUM("male", "female"),
      allowNull: false,
      defaultValue : 'male'
    },
    relationship: {
      type: DataTypes.ENUM(
        "",
        "Myself",
        "Spouse",
        "Daughter",
        "Son",
        "Mother",
        "Father",
        "Sister",
        "Brother",
        "Aunt",
        "Uncle",
        "Cousin Sister",
        "Cousin Brother",
        "Niece",
        "Nephew",
        "Grand Mother",
        "Grand Father",
        "Grand Daughter",
        "Grand Son",
        "Mother In Law",
        "Father In Law",
        "Brother In Law",
        "Sister In Law"
      ),
      allowNull: false,
      defaultValue: "",
    },
    isOwner: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    balkan_key: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "FamilyTrees",
    timestamps: true,
  }
);

FamilyTreesModel.hasMany(FamilyTreesModel, {
  foreignKey: "parentId",
  as: "children",
});

FamilyTreesModel.belongsTo(FamilyTreesModel, {
  foreignKey: "parentId",
  as: "parent",
});

export default FamilyTreesModel;