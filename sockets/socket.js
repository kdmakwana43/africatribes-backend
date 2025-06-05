import { JWT } from "../config/global.js";
import GroupChatsModel from "../models/GroupChatsModel.js";
import GroupMembersModel from "../models/GroupMembersModel.js";

const verifyToken = (token) => {
  try {
    const decoded = JWT.verify(token, process.env.JWT_SECRET);
    return { userId: decoded.id }; 
  } catch (error) {
    throw new Error("Invalid token");
  }
};

export default function setupSocket(io) {
  
  io.use((socket, next) => {
    const token = socket.handshake.auth.token;
    try {
      const user = verifyToken(token); // Implement your token verification
      socket.user = user; // Attach user to socket
      next();
    } catch (error) {
      next(new Error("Authentication error"));
    }
  });

  // Socket.IO Connection
  io.on("connection", (socket) => {
    console.log(`User ${socket.user.userId} connected`);

    // Join group rooms
    socket.on("joinGroup", async ({ groupId }) => {
      try {
        // Verify user is a member of the group
        const isMember = await GroupMembersModel.findOne({
          where: { groupId, userId: socket.user.userId },
        });
        if (!isMember) {
          socket.emit("error", { message: "You are not a member of this group" });
          return;
        }
        socket.join(`group:${groupId}`);
        socket.emit("joinedGroup", { groupId });
        console.log('User joined group:', groupId);
      } catch (error) {
        socket.emit("error", { message: error.message });
      }``
    });

    // Handle sending group messages
    socket.on("sendGroupMessage", async ({ groupId, message }) => {
      try {

        console.log('message',groupId,message,socket.user)

        // Verify user is a member
        const isMember = await GroupMembersModel.findOne({
          where: { groupId, userId: socket.user.userId },
        });
        if (!isMember) {
          socket.emit("error", { message: "You are not a member of this group" });
          return;
        }

        // Save message to database
        const chat = await GroupChatsModel.create({
          groupId,
          userId: socket.user.userId,
          message,
        });

        // Broadcast message to group
        io.to(`group:${groupId}`).emit("groupMessage", {
          id: chat.id,
          groupId,
          userId: socket.user.userId,
          message,
          sentAt: chat.sentAt,
        });
      } catch (error) {
        socket.emit("error", { message: error.message });
      }
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      console.log(`User ${socket.user.userId} disconnected`);
    });
  });
}