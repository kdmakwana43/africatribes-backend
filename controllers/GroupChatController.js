import { Op, Sequelize } from "sequelize";
import { __ } from "../config/global.js";
import Users from "../models/UserModel.js";
import { th } from "@faker-js/faker";
import GroupChatsModel from "../models/GroupChatsModel.js";
import GroupMembersModel from "../models/GroupMembersModel.js";
import GroupModel from "../models/GroupModel.js";
import moment from "moment";
import sequelize from "../config/database.js";


export const createGroup = async (req, res) => {
  try {

    // Validate input
    __.validation(["name","members"], req.body);
    const userId = req.Auth.id;
    const group = await GroupModel.create({
      name: req.body.name,
      creatorId: userId,
    });

    // console.log("Group created:", group);

    if(!Array.isArray(req.body.members)) throw new Error("Members should be an array");

    // Add creator as admin
     await GroupMembersModel.create({
      groupId: group.id,
      userId,
      role: "admin",
    });


    // Add Members
    // const memberPromises = req.body.members.map(memberId => {
    //   return GroupMembersModel.create({
    //     groupId: group.id,
    //     userId: memberId,
    //     role: "member",
    //   });
    // });

    // await Promise.all(memberPromises);

    __.res(res, group, 200);
  } catch (error) {
    console.error("Error creating group:", error);
    __._throwError(res, error);
  }
};

// Add member to group
export const addMember = async (req, res) => {
  try {
    __.validation(["groupId", "members"], req.body);
    const { groupId, members } = req.body;
    const requesterId = req.Auth.id;

    if (!Array.isArray(members)) throw new Error("Members should be an array");

    const isAdmin = await GroupMembersModel.findOne({
      where: { groupId, userId: requesterId, role: "admin" },
    });
    if (!isAdmin) {
      return __._throwError(res, new Error("Only admins can add members"));
    }

    const existingMembers = await GroupMembersModel.findAll({
      where: {
        groupId,
        userId: members,
      },
      attributes: ['userId'],
    });

    const existingMemberIds = existingMembers.map(m => m.userId);
    const newMemberIds = members.filter(id => !existingMemberIds.includes(id));

    const memberPromises = newMemberIds.map(memberId => {
      return GroupMembersModel.create({
        groupId,
        userId: memberId,
        role: "member",
      });
    });

    await Promise.all(memberPromises);

    __.res(res, { message: "Members added successfully", addedCount: newMemberIds.length }, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};


// Remove member from group
export const removeMember = async (req, res) => {
  try {

    __.validation(["groupId", "userId"], req.body);
    const { groupId, userId } = req.body;
    const requesterId = req.Auth.id;

    // Check if requester is an admin
    const isAdmin = await GroupMembersModel.findOne({
      where: { groupId, userId: requesterId, role: "admin" },
    });
    if (!isAdmin) {
      return __._throwError(res, new Error("Only admins can remove members"));
    }

    // Check if user is a member
    const member = await GroupMembersModel.findOne({ where: { groupId, userId } });
    if (!member) {
      return __._throwError(res, new Error("User is not a member of this group"));
    }

    // Prevent removing the creator
    const group = await GroupModel.findByPk(groupId);
    if (group.creatorId === userId) {
      return __._throwError(res, new Error("Cannot remove the group creator"));
    }

    // Remove member
    await member.destroy();

    __.res(res, { message: "Member removed successfully" }, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

// Make member an admin
export const changeRole = async (req, res) => {
  try {

    __.validation(["groupId", "userId", "role"], req.body);

    const { groupId, userId, role } = req.body;
    const requesterId = req.Auth.id;

    if(requesterId === userId) {
      return __._throwError(res, new Error("You cannot change your own role"));
    }

    // Check if requester is an admin
    const isAdmin = await GroupMembersModel.findOne({
      where: { groupId, userId: requesterId, role: "admin" },
    });
    if (!isAdmin) {
      return __._throwError(res, new Error("Only admins can make others admin"));
    }

    // Check if user is a member
    const member = await GroupMembersModel.findOne({ where: { groupId, userId } });
    if (!member) {
      return __._throwError(res, new Error("User is not a member of this group"));
    }

    await member.update({ role: role });
    __.res(res, { message: `User role updated to ${role}` }, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

// Delete group
export const deleteGroup = async (req, res) => {
  try {
    __.validation(["groupId"], req.body);
    const { groupId } = req.body;
    const requesterId = req.Auth.id;

    // Check if group exists and requester is the creator
    const group = await GroupModel.findOne({
      where: { id: groupId, creatorId: requesterId },
    });
    if (!group) {
      return __._throwError(res, new Error("Group not found or you are not the creator"));
    }

    // Delete group (cascades to GroupMembers and GroupChats)
    await group.destroy();

    __.res(res, { message: "Group deleted successfully" }, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

// Get group chats
export const getGroupChats = async (req, res) => {
  try {
    __.validation(["groupId"], req.body);
    const { groupId } = req.body;
    const requesterId = req.Auth.id;

    // Check if user is a member of the group
    const isMember = await GroupMembersModel.findOne({
      where: { groupId, userId: requesterId },
    });
    if (!isMember) {
      return __._throwError(res, new Error("You are not a member of this group"));
    }

    // Fetch chats
    const chats = await GroupChatsModel.findAll({
      where: { groupId },
      include: [
        {
          model: Users,
          as: "sender",
          attributes: ["id", "first_name", "last_name", "village", "tribe", "profile"],
        },
      ],
      order: [["sentAt", "ASC"]],
    });

    // Format messages by date
    const formattedMessages = {};
    const today = moment().startOf("day");
    const yesterday = moment().subtract(1, "days").startOf("day");

    chats.forEach((message) => {
      const sentAt = moment(message.sentAt);
      let dateKey;

      
      if (sentAt.isSame(today, "day")) {
        dateKey = "Today";
      } else if (sentAt.isSame(yesterday, "day")) {
        dateKey = "Yesterday";
      } else {
        dateKey = sentAt.format("DD-MM-YYYY");
      }

      // Initialize date array if not exists
      if (!formattedMessages[dateKey]) {
        formattedMessages[dateKey] = [];
      }

      // Create message object
      const messageObject = {
        id: message.id,
        userId: message.userId,
        first_name: message.sender.first_name,
        last_name: message.sender.last_name,
        village: message.sender.village,
        tribe: message.sender.tribe,
        profile: message.sender.profile,
        message: message.message,
        sentAt: message.sentAt,
      };

      // Add to formatted messages
      formattedMessages[dateKey].push(messageObject);
    });

    __.res(res, formattedMessages, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const getGroups = async (req, res) => {
  try {


    const myGroups = await GroupMembersModel.findAll({
      where: { userId: req.Auth.id },
      attributes: ["groupId"],
    });

    const groups = await GroupModel.findAll({
      where : { id : myGroups.map(group => group.groupId) },
      order: [["id", "ASC"]],
      include : [
        {
          model: Users,
          as: "creator",
          attributes: ["id", "first_name", "last_name", "profile"],
        }
      ]
    });

    __.res(res, groups, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const groupDetails = async (req, res) => {
  try {

    __.validation(["groupId"], req.body);
    const { groupId } = req.body;

    const groups = await GroupModel.findOne({
      where: { id: groupId },
      order: [["createdAt", "ASC"]],
      include : [
        {
          model: GroupMembersModel,
          as: "members",
          include: [
            {
              model: Users,
              as: "user",
              attributes: ["id", "first_name",'last_name','village','tribe', "profile"],
            },
          ],
        },
      ]
    });

    __.res(res, groups, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};


export const getGroupChatsConversation = async (req, res) => {
  try {
    // const result = await sequelize.query(
    //   `
    //   SELECT 
    //       g.id AS \`groupId\`,
    //       g.name AS \`group\`,
    //       gc.message AS \`lastMessage\`,
    //       gc.sentAt AS \`lastMessageTime\`,
    //       u.first_name AS \`lastMessageSender\`
    //   FROM \`Groups\` g
    //   INNER JOIN GroupMembers gm ON g.id = gm.groupId
    //   LEFT JOIN (
    //       SELECT gc1.*
    //       FROM GroupChats gc1
    //       INNER JOIN (
    //           SELECT groupId, MAX(sentAt) AS latestSentAt
    //           FROM GroupChats
    //           GROUP BY groupId
    //       ) gc2 ON gc1.groupId = gc2.groupId AND gc1.sentAt = gc2.latestSentAt
    //   ) gc ON g.id = gc.groupId
    //   LEFT JOIN Users u ON gc.userId = u.id
    //   WHERE gm.userId = :userId
    //   `,
    //   {
    //     replacements: { userId: req.Auth.id },
    //     type: sequelize.QueryTypes.SELECT,
    //   }
    // );

     __.res(res, result, 200);
  } catch (error) {
    console.error("Error fetching group chat summaries:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};