import bcrypt from "bcryptjs";
import crypto from "crypto";
export const createResponse = (res, data, code = 200) => {
  res.send({
    code: code,
    data: data,
    status: code == 200 ? 1 : 0,
  });
};

export const hasPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};
export const compressPassword = (password, oldPassword) => {
  return bcrypt.compareSync(password, oldPassword);
};

// export const validation = (fields, data) => {
//   for (let field of fields) {
//     if (!data[field]) {
//       throw new Error(`${field} is required`);
//     }
//   }
// };

export const validation = (fields, data) => {
  const emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  for (let field of fields) {
    if (!data[field]) {
      throw new Error(`${field} is required`);
    }

    // Extra email validation
    if (field === "email" && !emailRegex.test(data[field])) {
      throw new Error(`Invalid email format`);
    }

    if (field === "password" && data[field].length < 8) {
      throw new Error(`Password must be at least 8 characters long`);
    }
    if (field === "new_password" && data[field].length < 8) {
      throw new Error(`Password must be at least 8 characters long`);
    }
  }
};

export const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const authResponse = (user, token = false) => {
  let response = {
    _id: user._id,
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
    country: user.country,
    dob: user.dob,
    gender: user.gender,
    hometown: user.hometown,
    tribe: user.tribe,
    village: user.village,
    profile: user.profile,
    alias: user.alias,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt,
  };
  if (token) {
    response.token = token;
  }
  return response;
};

export const generateToken = () => {
  return crypto.randomBytes(32).toString("hex");
};
