import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Router from "./routes/api.js";
import { ConnectDb } from "./config/db-connect.js";
import adminRouter from "./routes/admin.js";
import { APP_PATH, path } from "./config/global.js";
import startBlogRobot from "./robots/blogs-robot.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

app.use(express.static("public", { maxAge: "365d" }));
app.use(express.static(path.join(APP_PATH, "../public")));

// Routes
app.use("/api/v1", Router);
app.use("/master", adminRouter);



// Start server
app.listen(PORT, "0.0.0.0", async () => {
  console.log(`Server is running on port ${PORT}`);
  ConnectDb();


  // Robot
  // startBlogRobot()
  

});
