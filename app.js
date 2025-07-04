import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import { ConnectDb } from "./config/db-connect.js";
import Router from "./routes/api.js";
import adminRouter from "./routes/admin.js";
import { APP_PATH, path } from "./config/global.js";
import startBlogRobot from "./robots/blogs-robot.js";
import startUserRobot from "./robots/user-robot.js";
import setupSocket from "./sockets/socket.js";
import mail from "./mails/mails.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    transports: ["websocket", "polling"],
    credentials: true,
  },
});

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public", { maxAge: "365d" }));
app.use(express.static(path.join(APP_PATH, "../public")));

// Globals
global._Mail = mail;

// Admin Routes
app.use("/master", adminRouter);

// API Routes
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1", Router);

// Initialize Socket.IO
setupSocket(io);

// Start server
httpServer.listen(PORT, "0.0.0.0", async () => {
  console.log(`Server is running on port ${PORT}`);
  await ConnectDb();

  // Robot
  // startBlogRobot();
  // startUserRobot();
});
