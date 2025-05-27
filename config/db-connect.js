import sequelize from "./database.js";

export const ConnectDb = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ MySQL connection successful.");
  } catch (error) {
    console.error("❌ Unable to connect to the database:", error);
  }
};
