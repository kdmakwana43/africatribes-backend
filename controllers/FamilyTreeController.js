import { Op } from "sequelize";
import { __ } from "../config/global.js";
import FamilyTreesModel from "../models/FamilyTreesModel.js";
import moment from "moment";
import Users from "../models/UserModel.js";
import InvitationModel from "../models/InvitationModel.js";
import TreesModel from "../models/TreesModel.js";

const prepareMemberData = (body, data = {}) => {
  const allowedFields = [
    "first_name",
    "surname",
    "dob",
    "dod",
    "birthTown",
    "profession",
    "relationship",
    "fid",
    "mid",
    "pids",
  ];
  allowedFields.forEach((field) => {
    if (body[field]) {
      console.log("field", field);

      if ((field === "dob" || field === "dod") && body[field] !== "") {
        const date = moment(body[field], "YYYY-MM-DD", true); // strict parsing
        if (date.isValid()) {
          body[field] = date.format("YYYY-MM-DD");
          data[field] = body[field];
        } else {
          delete body[field];
        }
      }

      data[field] = body[field];
    }
  });

  return data;
};

function buildFamilyTree(data, parentId = null) {
  return data
    .filter(
      (member) =>
        member.parentId === parentId && member.relationship !== "Spouse"
    )
    .map((member) => {
      // Fetch spouses (records with relationship = "Spouse" and parentId matching member.id)
      const spouses = data
        .filter(
          (spouse) =>
            spouse.parentId === member.id && // Spouse's parentId matches member's id
            spouse.relationship === "Spouse"
        )
        .map((spouse) => ({
          ...spouse.dataValues,
          spouses: [], // Spouses typically don't have their own spouses
          children: buildFamilyTree(data, spouse.id), // Spouses can have their own children
        }));

      return {
        ...member.dataValues,
        spouses, // Include spouses array
        children: buildFamilyTree(data, member.id), // Include children
      };
    });
}

function transformFamilyTreeData(inputData) {
  const result = [];

  function processMember(member, parentId = null) {
    const entry = {
      id: member.id,
      gender: member.gender === "male" ? "male" : "female",
      name: `${member.first_name || ""} ${member.surname || ""}`.trim(),
      dob: member.dob ? moment(member.dob).format("YYYY-MM-DD") : null,
      relationship: member.relationship || "",
      birthTown: member.birthTown || "",
      profession: member.profession || "",
    };

    if (member.profile) {
      entry.photo = __.assetFullURL(member.profile);
    }

    if (member.mid) {
      entry.mid = member.mid;
    }

    if (member.fid) {
      entry.fid = member.fid;
    }

    if (parentId) {
      entry.fid = member.fid;
    }

    if (member.spouses && member.spouses.length > 0) {
      entry.pids = member.spouses.map((s) => s.id);
    }

    result.push(entry);

    // Process spouses
    if (member.spouses && member.spouses.length > 0) {
      member.spouses.forEach((spouse) => {
        const spouseEntry = {
          id: spouse.id,
          gender: "female", // Forced to 'female' as per output requirement
          name: `${spouse.first_name || ""} ${spouse.surname || ""}`.trim(),
          pids: [member.id],
        };
        if (spouse.profile) {
          spouseEntry.photo = spouse.profile;
        }
        result.push(spouseEntry);
      });
    }

    // Process children recursively
    if (member.children && member.children.length > 0) {
      member.children.forEach((child) => {
        processMember(child, member.id);
      });
    }
  }

  // Start processing each root member
  inputData.forEach((member) => {
    processMember(member);
  });

  return result;
}

const finalTreeVieBuilder = (members) => {

    // Helper function to build recursive member tree
    const buildMemberTree = (member, allMembers, seenIds = new Set()) => {
      const memberData = member.get({ plain: true });

      // Warn about empty balkan_key
      if (!memberData.balkan_key) {
        console.log(`Warning: Member ID ${memberData.id} has empty balkan_key`);
      }

      // Avoid infinite recursion
      if (seenIds.has(memberData.id)) {
        console.log(`Skipping member ID ${memberData.id} due to recursion`);
        return null;
      }
      seenIds.add(memberData.id);

      // Find children where fid or mid matches this member's balkan_key (non-empty)
      const children = allMembers
        .filter((m) => {
          const isChild =
            (m.fid && m.fid === memberData.balkan_key) ||
            (m.mid && m.mid === memberData.balkan_key);
          if (isChild)
            console.log(
              `Found child ID ${m.id} for parent ID ${memberData.id}`
            );
          return isChild;
        })
        .map((child) => buildMemberTree(child, allMembers, new Set(seenIds)))
        .filter((child) => child !== null);

      // Find spouses from pids
      const spouses = allMembers
        .filter(
          (m) => memberData.pids && memberData.pids.includes(m.balkan_key)
        )
        .map((spouse) => buildMemberTree(spouse, allMembers, new Set(seenIds)))
        .filter((spouse) => spouse !== null);

      return {
        ...memberData,
        parentId: null,
        spouses: spouses || [],
        children: children || [],
      };
    };

    // Select all top-level members (no parents)
    let formattedMembers = members
      .filter((member) => !member.fid && !member.mid)
      .sort((a, b) => {
        // Sort by isOwner: true, then createdAt
        if (a.isOwner && !b.isOwner) return -1;
        if (!a.isOwner && b.isOwner) return 1;
        return new Date(a.createdAt) - new Date(b.createdAt);
      })
      .map((member) => buildMemberTree(member, members));
    // Fallback to isOwner if no top-level members found
    if (formattedMembers.length === 0) {
      console.log("No top-level members found, falling back to isOwner: true");
      formattedMembers = members
        .filter((member) => member.isOwner)
        .map((member) => buildMemberTree(member, members));
    }

    if (formattedMembers.length === 0) {
      console.log(
        "No isOwner members found, falling back to earliest createdAt"
      );
      formattedMembers = members
        .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
        .map((member) => buildMemberTree(member, members));
    }

    // Filter out duplicates
    const seenIds = new Set();
    const uniqueMembers = formattedMembers.filter((member) => {
      if (!member) return false;

      // Check if member is already nested
      const isInSpousesOrChildren = formattedMembers.some((otherMember) => {
        if (!otherMember || otherMember.id === member.id) return false;
        const checkNested = (node) => {
          if (!node) return false;
          if (node.id === member.id) return true;
          return (
            node.spouses.some(checkNested) || node.children.some(checkNested)
          );
        };
        return checkNested(otherMember);
      });

      if (!isInSpousesOrChildren && !seenIds.has(member.id)) {
        seenIds.add(member.id);
        return true;
      }
      console.log(
        `Excluding member ID ${member.id} as it is nested or already seen`
      );
      return false;
    });

    return uniqueMembers
}

const createMemberNode = async (req) => {
  try {
    // Validate required fields
    if (!req.body.first_name) {
      throw new Error("First name is required.");
    }

    // Base data for the new node
    const data = {
      first_name: req.body.first_name,
      userId: req.Auth.id,
      relationship: req.body.relationship || "",
      gender: req.body.gender,
      surname: req.body.surname || null,
      dob: req.body.dob || null,
      dod: req.body.dod || null,
      birthTown: req.body.birthTown || null,
      profession: req.body.profession || null,
      balkan_key: req.body.balkan_key || __.generateToken(6),
      pids: [],
      profile: req.file ? `/images/${req.file.filename}` : req.body.photo || "",
    };

    let createdNode = null;
    const parentId = req.body.parent ? Number(req.body.parent) : null;

    // Fetch the current member if parentId is provided
    let currentMember = null;
    if (parentId) {
      currentMember = await TreesModel.findOne({
        where: { id: parentId, userId: req.Auth.id },
      });
      if (!currentMember) {
        throw new Error("Parent member not found.");
      }
    }

    console.log("currentMember", currentMember);

    if (currentMember) {
      if (req.body.relationship === "Spouse") {
        // Create the new node
        data.sid = currentMember.balkan_key
        createdNode = await TreesModel.create(data);

        const currentPids = currentMember.pids || [];
        currentPids.push(createdNode.balkan_key);
        currentMember.pids = currentPids;
        await currentMember.save();
        console.log("Updated currentMember pids:", currentMember.pids);
      } else {
        data.fid = currentMember.balkan_key;
        if (req.body.mid) {
          data.mid = req.body.mid;
        }
        createdNode = await TreesModel.create(data);
      }

      console.log("currentMember after save:", currentMember.toJSON());
    } else {
      // Root User: Create a root node
      createdNode = await TreesModel.create(data);
    }

    return createdNode;
  } catch (error) {
    console.error("Error in createMemberNode:", error.stack);
    throw new Error(`Failed to create member node: ${error.message}`);
  }
};

function transformFamilyTreeKitkat(data) {
  /// Map to store new IDs (original ID -> new ID)
  const idMap = new Map();
  let newId = 1;

  // Collect all individuals by traversing the nested structure
  const individuals = [];

  function collectIndividuals(person) {
    if (!person || individuals.some((p) => p.id === person.id)) return;
    individuals.push(person);
    person.spouses.forEach((spouse) => collectIndividuals(spouse));
    person.children.forEach((child) => collectIndividuals(child));
  }

  // Start collecting from the root
  data.forEach((root) => collectIndividuals(root));

  // Assign new IDs (1 to N), prioritizing "Myself"
  const myself = individuals.find((p) => p.relationship === "Myself");
  if (myself) {
    idMap.set(myself.id, newId++);
  }
  individuals.forEach((person) => {
    if (person.relationship !== "Myself" && !idMap.has(person.id)) {
      idMap.set(person.id, newId++);
    }
  });

  // Transform each individual
  const result = individuals.map((person) => {
    const newPerson = {
      id: idMap.get(person.id),
      originalId: person.id,
      name: `${person.first_name} ${person.surname}`.trim(),
    };

    // Add photo if available
    if (person.profile) {
      newPerson.photo = person.profile.match("http")
        ? person.profile
        : `${process.env.BASE_URL}${person.profile}`;
    }

    // Determine parent relationships (only for non-spouse individuals with a valid parentId)
    if (person.parentId && person.relationship !== "Spouse") {
      const parent = individuals.find((p) => p.id === person.parentId);
      if (parent) {
        if (parent.gender === "male") {
          newPerson.fatherId = idMap.get(parent.id);
        } else if (parent.gender === "female") {
          newPerson.motherId = idMap.get(parent.id);
        }
      }

      // Find the other parent (spouse of the known parent)
      if (parent && parent.spouses.length > 0) {
        const otherParent = parent.spouses[0];
        if (otherParent.gender === "male" && !newPerson.fatherId) {
          newPerson.fatherId = idMap.get(otherParent.id);
        } else if (otherParent.gender === "female" && !newPerson.motherId) {
          newPerson.motherId = idMap.get(otherParent.id);
        }
      }
    }

    // Add spouse IDs (for individuals with spouses or marked as a spouse)
    const isSpouse = individuals.some((p) =>
      p.spouses.some((s) => s.id === person.id)
    );
    if (person.spouses.length > 0 || isSpouse) {
      // Collect spouse IDs from person's spouses array
      let spouseIds = person.spouses.map((spouse) => idMap.get(spouse.id));
      // Add person as a spouse if they appear in another person's spouses array
      individuals.forEach((p) => {
        if (
          p.spouses.some((s) => s.id === person.id) &&
          !spouseIds.includes(idMap.get(p.id))
        ) {
          spouseIds.push(idMap.get(p.id));
        }
      });
      if (spouseIds.length > 0) {
        newPerson.spouseIds = spouseIds.sort((a, b) => a - b);
      }
    }

    // Add child IDs (from person's children and as spouse's children)
    let childIds = person.children.map((child) => idMap.get(child.id));
    // Add children from spouse's children array if person is a spouse
    if (isSpouse) {
      individuals.forEach((p) => {
        if (p.spouses.some((s) => s.id === person.id)) {
          childIds = [
            ...childIds,
            ...p.children.map((child) => idMap.get(child.id)),
          ];
        }
      });
    }
    if (childIds.length > 0) {
      newPerson.childIds = [...new Set(childIds)].sort((a, b) => a - b);
    }

    // Add sibling IDs (siblings share the same parents, exclude spouses)
    if (person.parentId && person.relationship !== "Spouse") {
      const parent = individuals.find((p) => p.id === person.parentId);
      if (parent) {
        // Get all children of the parent
        let parentChildren = parent.children.map((child) =>
          idMap.get(child.id)
        );
        // Get children of the parent's spouse (if any)
        let spouseChildren =
          parent.spouses.length > 0
            ? parent.spouses[0].children.map((child) => idMap.get(child.id))
            : [];
        // Combine and filter to get siblings (exclude self and spouses)
        const siblingIds = [
          ...new Set([...parentChildren, ...spouseChildren]),
        ].filter(
          (id) =>
            id !== newPerson.id &&
            individuals.find((p) => idMap.get(p.id) === id).relationship !==
              "Spouse"
        );
        if (siblingIds.length > 0) {
          newPerson.siblingIds = siblingIds.sort((a, b) => a - b);
        }
      }
    }

    return newPerson;
  });

  // Sort to place "Myself" (lowest ID) first, then others by new ID
  return result.sort((a, b) => a.id - b.id);
}

export const addFamilyNode = async (req, res) => {
  try {
    const response = await createMemberNode(req);
    if (!response)
      throw new Error("Failed to create this member! Please try again");
    __.res(res, response, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const getFamilyTrees = async (req, res) => {
  try {
   

    const condition = {
      userId: req.Auth.id,
    };

    if (req.body?.userId) {
      const user = await Users.findByPk(req.body?.userId);
      if (!user) {
        console.log("User not found for userId:", req.body.userId);
        throw new Error(
          "User not found! Please check the user id and try again."
        );
      }

      const isAccepted = await InvitationModel.isAccepted(
        req.body?.userId,
        req.Auth.id
      );
     
      if (!isAccepted && user.allowPublicView === false) {
        throw new Error(
          "This user profile is private! You can not view this family tree."
        );
      }
      condition.userId = req.body?.userId;
    }

    const members = await TreesModel.findAll({
      where: condition,
      attributes: [
        "id",
        "first_name",
        "userId",
        "surname",
        "dob",
        "dod",
        "birthTown",
        "profession",
        "profile",
        "gender",
        "relationship",
        "isOwner",
        "balkan_key",
        "fid",
        "mid",
        "pids",
        "createdAt",
        "updatedAt",
      ],
    });

    const uniqueMembers =  finalTreeVieBuilder(members)

    __.res(res, uniqueMembers, 200);
  } catch (error) {
    console.error("Error in getFamilyTrees:", error.message);
    __._throwError(res, error);
  }
};

export const getFamilyTreesPublic = async (req, res) => {
  try {
    if (!req.body?.userId) throw new Error("invalid request");

    const condition = {
      userId: req.body?.userId,
    };

    const user = await Users.findByPk(req.body?.userId);
    if (!user)
      throw new Error(
        "User not found! Please check the user id and try again."
      );

    // Check its accepted
    if (user.allowPublicView == false)
      throw new Error(
        "This user profile is private! You can not view this family tree."
      );

    // Fetch all nodes for this user
    const flatMembers = await TreesModel.findAll({
      where: condition,
      order: [["id", "ASC"]],
    });

    // Build tree
   const uniqueMembers =  finalTreeVieBuilder(flatMembers)

    __.res(res, uniqueMembers, 200);

  } catch (error) {
    __._throwError(res, error);
  }
};

export const deleteFamilyNode = async (req, res) => {
  try {
    __.validation(["id"], req.body);

    const condition = {
      userId: req.Auth.id,
    };

    if (isNaN(Number(req.body.id))) {
      condition.balkan_key = req.body.id;
    } else {
      condition.id = req.body.id;
    }
    const node = await TreesModel.findOne({
      where: condition,
    });

    if (!node)
      throw new Error("This member is already deleted or not saved yet");
    await node.destroy();

    // Remove From Parent
    const parentUser = await TreesModel.findOne({
      where: { userId: req.Auth.id, id: node.fid },
    });

    if (parentUser) {
      const currentPids = parentUser.pids || [];
      const removedMemberId = currentPids.indexOf(node.balkan_key);
      if (removedMemberId != -1) {
        currentPids.splice(removedMemberId, 1);
        currentMember.pids = currentPids;
        await currentMember.save();
      }
    }

     // Update All Root Member
      const updates = await TreesModel.update(
      { fid: null },
      {
        where: { 
          userId: req.Auth.id,
          fid : node.balkan_key 
        }
      }
    );

    console.log('updates',updates)

    __.res(res, "Member node deleted successfully!", 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const updateFamilyNode = async (req, res) => {
  try {
    __.validation(["id"], req.body);

    const condition = {
      userId: req.Auth.id,
    };

    var isBalkan = false;

    if (isNaN(Number(req.body.id))) {
      condition.balkan_key = req.body.id;
      isBalkan = true;
    } else {
      condition.id = req.body.id;
    }

    var node = await TreesModel.findOne({
      where: condition,
    });

    if (!node) throw new Error("Oops! unable to find this member!");

    const allowedFields = [
      "first_name",
      "surname",
      "dob",
      "dod",
      "birthTown",
      "profession",
      "relationship",
    ];

    allowedFields.forEach((field) => {
      if (req.body[field] && req.body[field] != "") {
        if ((field == "dob" || field == "dod") && req.body[field] != "") {
          const date = moment(req.body[field], "YYYY-MM-DD", true);
          if (date.isValid()) {
            node[field] = date.format("YYYY-MM-DD");
          } else {
            delete req.body[field];
          }
        } else {
          node[field] = req.body[field];
        }
      }
    });

    if (req.file) {
      node.profile = `/images/${req.file.filename}`;
    }

    if (req.body.profile == "null") {
      node.profile = "";
    }

    await node.save();
    __.res(res, "Member updated successfully!", 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const moveChildNode = async (req, res) => {
  try {
    __.validation(["id", "moveTo"], req.body);

    if (req.body.moveTo == req.body.id)
      throw new Error("Invalid move operation!");

    const condition = {
      balkan_key: req.body.id,
      userId: req.Auth.id,
    };

    const node = await TreesModel.findOne({
      where: condition,
    });

    // if (!node.fid || node.fid == '')
    //   throw new Error(`${node.first_name} is root parent! can not move this.`);

    const targetNode = await TreesModel.findOne({
      where: {
        balkan_key: req.body.moveTo,
        userId: req.Auth.id,
      },
    });

    if (!targetNode)
      throw new Error(
        "The target not not found! Please refresh the page and check again."
      );

    node.fid = req.body.moveTo;
    await node.save();
    __.res(res, node, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const createParentNode = async (req, res) => {
  try {
    __.validation(["first_name", "gender"], req.body);

    const currentUser = {
      userId: req.Auth.id,
    };

    var data = {
      first_name: req.body.first_name,
      gender: req.body.gender,
      userId: req.Auth.id,
      balkan_key: __.generateToken(6),
    };

    data = prepareMemberData(req.body, data);
    if (req.file) {
      data.profile = `/images/${req.file.filename}`;
    }

    console.log('req.body.parentId',req.body.parentId)

    if (req.body.parentId) {
      currentUser.id = req.body.parentId;

      const currentMember = await TreesModel.findOne({ where: currentUser });
      if (currentMember && currentMember.fid && currentMember.fid != "")
        throw new Error("This member already have parent");

      const createdNode = await TreesModel.create(data);
      if (!createdNode)
        throw new Error("Oops! Failed to create this member! Please try again");

      if (currentMember) {
        // Update current user parent
        currentMember.fid = createdNode.balkan_key;
        await currentMember.save();
      }

      __.res(res, createdNode.toJSON(), 200);
    } else {
      // currentUser.fid = null

      const createdNode = await TreesModel.create(data);
      if (!createdNode)
        throw new Error("Oops! Failed to create this member! Please try again");

      // Update All Root Member
      const updates = await TreesModel.update(
      { fid: createdNode.balkan_key },
      {
        where: { 
          [Op.and]: [
            {
              [Op.or]: [
                { fid: '' },
                { fid: null }
              ]
            },
            { balkan_key: { [Op.ne]: createdNode.balkan_key } },
            { userId: req.Auth.id }
          ]
        }
      }
    );


      console.log('updates',updates)

      __.res(res, createdNode.toJSON(), 200);
    }
  } catch (error) {
    __._throwError(res, error);
  }
};

export const createSibling = async (req, res) => {
  try {
    __.validation(["first_name", "id", "gender"], req.body);

    const conditionRoot = {
      userId: req.Auth.id,
      id: req.body.id,
    };

    const currentMember = await TreesModel.findOne({ where: conditionRoot });
    if (!currentMember) throw new Error("Oops! Selected member not found");

    console.log("currentMember", currentMember);

    var data = {
      first_name: req.body.first_name,
      gender: req.body.gender,
      userId: req.Auth.id,
      fid: currentMember.fid,
      balkan_key: __.generateToken(6),
    };

    data = prepareMemberData(req.body, data);
    if (req.file) {
      data.profile = `/images/${req.file.filename}`;
    }

    const createdNode = await TreesModel.create(data);

    if (!createdNode)
      throw new Error("Oops! Failed to create this member! Please try again");

    __.res(res, createdNode.toJSON(), 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const getFamilyMembers = async (req, res) => {
  try {
    const conditionRoot = {
      userId: req.Auth.id,
    };
    const members = await TreesModel.findAll({
      where: conditionRoot,
      attributes: ["id", "first_name", "surname", "relationship", "profile","balkan_key"],
      order: [["id", "ASC"]],
    });
    if (!members)
      throw new Error("Oops! No family members found for this user");
    __.res(res, members, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const getFamilyBalkanTree = async (req, res) => {
  try {
    // Fetch family tree entries for the authenticated user with children, parent, and user data
    const familyMembers = await FamilyTreesModel.findAll({
      where: { userId: req.Auth.id },
      include: [
        {
          model: FamilyTreesModel,
          as: "children",
          attributes: [
            "id",
            "relationship",
            "dob",
            "dod",
            "birthTown",
            "profession",
            "fid",
            "mid",
            "pids",
          ],
        },
        {
          model: FamilyTreesModel,
          as: "parent",
          attributes: [
            "id",
            "relationship",
            "dob",
            "dod",
            "birthTown",
            "profession",
            "fid",
            "mid",
            "pids",
          ],
        },
      ],
    });

    // Transform the data to BALKAN FamilyTreeJS format
    const tree = buildFamilyTree(familyMembers);
    const result = transformFamilyTreeData(tree);

    __.res(res, result, 200);
  } catch (error) {
    console.error("Error fetching family tree data:", error);
    __._throwError(res, error);
  }
};
export const getFamilyBalkanTreeBalkan = async (req, res) => {
  try {
    const familyTrees = await FamilyTreesModel.findAll({
      where: { userId: req.Auth.id },
      attributes: [
        "id",
        "balkan_key",
        "first_name",
        "surname",
        "dob",
        "birthTown",
        "profile",
        "gender",
        "pids",
        "mid",
        "fid",
      ],
    });

    // Transform the data to match the requested format

    const formattedData = familyTrees.map((member) => {
      const result = {
        id: member.balkan_key || member.id.toString(), // Use balkan_key if available, else id
        name: `${member.first_name}${
          member.surname ? " " + member.surname : ""
        }`, // Combine first_name and surname
        gender: member.gender,
      };

      if (!member.pids || member.pids == "") {
        const spouses = familyTrees.filter((s) => s.fid == result.id);
        result.pids = spouses.map((x) => x.balkan_key);
      } else {
        try {
          result.pids = JSON.parse(member.pids);
        } catch (error) {}
      }

      // Add optional fields if they exist
      if (member.profile) result.photo = member.profile; // Map profile to photo
      if (member.dob) result.born = member.dob; // Map dob to born
      if (member.birthTown) result.city = member.birthTown; // Map birthTown to city
      // if (member.pids) result.pids = JSON.parse(member.pids); // Parse pids if it’s a JSON string
      if (member.mid) result.mid = member.mid; // Include mother ID
      if (member.fid) result.fid = member.fid; // Include father ID

      return result;
    });

    __.res(res, formattedData, 200);
  } catch (error) {
    console.error("Error fetching family tree data:", error);
    __._throwError(res, error);
  }
};

export const createBalkanNewNodes = async (req, res) => {
  try {
    __.validation(["members"], req.body);

    if (!Array.isArray(req.body.members) || req.body.members.length == 0)
      throw new Error("Please provide valid members data to create");

    var members = [...req.body.members];

    members.forEach(async (member) => {
      try {
        req.body.first_name = member.name;
        req.body.parent = member.parent;
        req.body.relationship = member.relationship;
        req.body.gender = member.gender;
        req.body.balkan_key = member.balkan_key;
        req.body.fid = member.fid;
        req.body.mid = member.mid;
        try {
          req.body.pids = member.pdis ? JSON.stringify(member.pdis) : null;
        } catch (error) {}
        const response = await createMemberNode(req);
        console.log("response", response);
      } catch (error) {
        console.error(
          `Failed to create member ${member.first_name}:`,
          error.message
        );
      }
    });

    __.res(res, "Family members saved successfully!", 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const createNewFamilyNodes = async (req, res) => {
  try {
    __.validation(["members"], req.body);

    if (!Array.isArray(req.body.members) || req.body.members.length == 0)
      throw new Error("Please provide valid members data to create");

    var members = [...req.body.members];

    await Promise.all(
      members.map(async (member) => {
        const memberObject = { ...member, userId: req.Auth.id };
        delete memberObject.id;
        memberObject.userId = req.Auth.id;
        delete memberObject.createdAt;
        delete memberObject.updatedAt;
        delete memberObject.isOwner;

        if (!memberObject.balkan_key) {
          memberObject.balkan_key = member.id;
        }

        if (!memberObject.first_name) {
          memberObject.first_name = "New Member";
        }

        if (memberObject.name && memberObject.name != "") {
          const fullNameSplit = memberObject.name.split(" ");
          memberObject.first_name = fullNameSplit[0];
          if (fullNameSplit[1]) {
            memberObject.surname = fullNameSplit[1];
          }
        }

        if (
          memberObject.pids &&
          typeof memberObject.pids == "string" &&
          (memberObject.pids.match(",") || memberObject.pids !== "")
        ) {
          try {
            memberObject.pids = memberObject.pids.split(",");
          } catch (error) {
            console.log("Error", error);
          }
        }

        if (
          memberObject.photo &&
          !memberObject.photo.match("/assets/images/")
        ) {
          memberObject.profile = memberObject.photo.replace("/backend", "");
        }

        if (memberObject.ImgUrl) {
          memberObject.profile = memberObject.ImgUrl;
        }

        if (memberObject.dob && memberObject.dob != "") {
          memberObject.dob = moment(memberObject.dob).format("YYYY-MM-DD");
        } else {
          memberObject.dob = null;
        }

        if (memberObject.dod && memberObject.dod != "") {
          memberObject.dod = moment(memberObject.dod).format("YYYY-MM-DD");
        } else {
          memberObject.dod = null;
        }

        console.log("memberObject", memberObject);
        const existingMember = await TreesModel.findOne({
          where: {
            userId: req.Auth.id,
            balkan_key: memberObject.balkan_key,
          },
        });

        if (existingMember) {
          await existingMember.update(memberObject);
        } else {
          await TreesModel.create(memberObject);
        }
      })
    );

    __.res(res, "Family members saved successfully!", 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const getFamilyBalkanTreeNew = async (req, res) => {
  try {
    const familyTrees = await TreesModel.findAll({
      where: { userId: req.Auth.id },
      attributes: [
        "id",
        "balkan_key",
        "first_name",
        "surname",
        "dob",
        "birthTown",
        "profile",
        "gender",
        "pids",
        "mid",
        "fid",
        "userId",
      ],
    });

    // console.log('familyTrees',familyTrees)

    __.res(res, familyTrees, 200);
  } catch (error) {
    console.error("Error fetching family tree data:", error);
    __._throwError(res, error);
  }
};

export const deleteTreeNode = async (req, res) => {
  try {
    __.validation(["id"], req.body);

    const condition = {
      userId: req.Auth.id,
    };

    if (isNaN(Number(req.body.id))) {
      condition.balkan_key = req.body.id;
    } else {
      condition.id = req.body.id;
    }

    // Find the node to delete
    const node = await TreesModel.findOne({ where: condition });

    if (!node) {
      throw new Error("This member is already deleted or not saved yet");
    }

    // Function to recursively delete subtree
    const deleteSubtree = async (balkanKey, userId) => {
      // Find all descendants where balkan_key is in fid or sid
      const descendants = await TreesModel.findAll({
        where: {
          [Op.and]: [
            {
              [Op.or]: [{ fid: balkanKey }, { sid: balkanKey }],
            },
            { userId },
          ],
        },
      });

      // Recursively delete descendants
      for (const descendant of descendants) {
        await deleteSubtree(descendant.balkan_key, userId);
      }

      // Delete the descendants
      await TreesModel.destroy({
        where: {
          [Op.and]: [
            {
              [Op.or]: [{ fid: balkanKey }, { sid: balkanKey }],
            },
            { userId },
          ],
        },
      });
    };

    // Delete subtree if requested
    if (req.body.deleteSubTree) {
      await deleteSubtree(node.balkan_key, req.Auth.id);
    }

    // Delete the main node
    await node.destroy();

    __.res(res, "Member node and subtree deleted successfully!", 200);
  } catch (error) {
    __._throwError(res, error);
  }
};