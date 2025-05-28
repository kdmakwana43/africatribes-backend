import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Router from "./routes/api.js";
import { ConnectDb } from "./config/db-connect.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// Routes
app.use("/api/v1", Router);

// Start server
app.listen(PORT, "0.0.0.0", async () => {
  console.log(`Server is running on port ${PORT}`);
  ConnectDb();
});
