import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";
import CountryModel from "./CountryModel.js"; // Make sure this path is correct

const Users = sequelize.define(
  "Users",
  {
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 50],
          msg: "First name must be between 1 and 50 characters long.",
        },
      },
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [2, 50],
          msg: "Last name can have up to 50 characters.",
        },
      },
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: "Email address is already in use.",
      },
      allowNull: false,
      validate: {
        isEmail: {
          msg: "Please provide a valid email address.",
        },
        len: {
          args: [5, 100],
          msg: "Email must be between 5 and 100 characters long.",
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 100],
          msg: "Password must be at least 8 characters long.",
        },
      },
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM("male", "female"),
      allowNull: true,
    },
    countryId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: CountryModel.tableName,
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    },
    hometown: {
      type: DataTypes.STRING,
      defaultValue: "",
      validate: {
        len: {
          args: [0, 100],
          msg: "Hometown can have up to 100 characters.",
        },
      },
    },
    tribe: {
      type: DataTypes.STRING,
      defaultValue: "",
      validate: {
        len: {
          args: [0, 100],
          msg: "Tribe can have up to 100 characters.",
        },
      },
    },
    chief: {
      type: DataTypes.STRING,
      defaultValue: "",
      validate: {
        len: {
          args: [0, 100],
          msg: "Chief can have up to 100 characters.",
        },
      },
    },
    province: {
      type: DataTypes.STRING,
      defaultValue: "",
      validate: {
        len: {
          args: [0, 100],
          msg: "Province can have up to 100 characters.",
        },
      },
    },
    village: {
      type: DataTypes.STRING,
      defaultValue: "",
      validate: {
        len: {
          args: [0, 100],
          msg: "Village can have up to 100 characters.",
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
    alias: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [0, 100],
          msg: "Alias can have up to 100 characters.",
        },
      },
    },
    totem: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: "",
      validate: {
        len: {
          args: [0, 100],
          msg: "Totem can have up to 100 characters.",
        },
      },
    },
    allowPublicView: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
      validate: {
        isBoolean: {
          msg: "Allow Public View must be a boolean value."
        }
      }
    },
    isPremium: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
      validate: {
        isBoolean: {
          msg: "Premium must be a boolean value."
        }
      }
    },
    status: {
      type: DataTypes.ENUM('Active', 'Deactivate'),
      allowNull: false,
      defaultValue: 'Active',
      validate: {
        isIn: {
          args: [['Active', 'Deactivate']],
          msg: 'Status must be either Active or Deactivate'
        }
      }
    }
  },
  {
    timestamps: true,
    tableName: "Users",
    hooks: {
      beforeCreate: (user) => {
        if (user.email) user.email = user.email.toLowerCase();
      },
      beforeUpdate: (user) => {
        if (user.email) user.email = user.email.toLowerCase();
      },
    },
  }
);

// Associations
Users.belongsTo(CountryModel, {
  foreignKey: "countryId",
  as: "country",
});


export default Users;
