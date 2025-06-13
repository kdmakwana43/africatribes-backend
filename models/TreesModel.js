import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import Users from "./UserModel.js";

const TreesModel = sequelize.define(
  "Trees",
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Users.tableName,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "CASCADE",
    },
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
    surname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 50],
          msg: "Surname must be between 2 and 50 characters long.",
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
      defaultValue: "",
      validate: {
        len: {
          args: [0, 100],
          msg: "Birth town can have up to 100 characters.",
        },
      },
    },
    profession: {
      type: DataTypes.STRING,
      defaultValue: "",
      validate: {
        len: {
          args: [0, 100],
          msg: "Profession can have up to 100 characters.",
        },
      },
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
      type: DataTypes.ENUM("male", "female", "other"),
      allowNull: true,
    },
    relationship: {
      type: DataTypes.STRING,
      defaultValue: "",
      validate: {
        len: {
          args: [0, 100],
          msg: "Relationship can have up to 100 characters.",
        },
      },
    },
    isOwner: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        isBoolean: {
          msg: "isOwner must be a boolean value.",
        },
      },
    },
    balkan_key: {
      type: DataTypes.STRING,
      defaultValue: "",
      validate: {
        len: {
          args: [0, 100],
          msg: "Balkan Key can have up to 100 characters.",
        },
      },
    },
    fid: {
      type: DataTypes.STRING,
      defaultValue: "",
      validate: {
        len: {
          args: [0, 100],
          msg: "FID can have up to 100 characters.",
        },
      },
    },
    mid: {
      type: DataTypes.STRING,
      defaultValue: "",
      validate: {
        len: {
          args: [0, 100],
          msg: "MID can have up to 100 characters.",
        },
      },
    },
    pids: {
      type: DataTypes.TEXT,
      allowNull: true,
      get() {
        const rawValue = this.getDataValue("pids");
        try {
          return rawValue ? JSON.parse(rawValue) : [];
        } catch (err) {
          return [];
        }
      },
      set(value) {
        this.setDataValue("pids", JSON.stringify(value || []));
      },
    },
  },
  {
    timestamps: true,
    tableName: "Trees",
  }
);

// Associations
TreesModel.belongsTo(Users, {
  foreignKey: "userId",
  as: "user",
});

export default TreesModel;
