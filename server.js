import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import body from "body-parser";
import Router from "./routes/api.js";
import sequelize from "./config/database.js";

dotenv.config();

import { ConnectDb } from "./config/db-connect.js";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(body.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", Router);

app.listen(PORT, "0.0.0.0", async () => {
  console.log(`Server is running on port ${PORT}`);
  ConnectDb();
});
