import bcrypt from "bcryptjs";

export const createResponse = (res, data, code = 200) => {
  res.send({
    code: code,
    data: data,
    status: code == 200 ? 1 : 0,
  });
};

export const hasPassword = async (password) => {
  return await bcrypt.hashSync(password, 10);
};
export const compressPassword = async (password, oldPassword) => {
  return await bcrypt.compareSync(password, oldPassword);
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
