import { Op } from "sequelize";
import { __ } from "../config/global.js";
import FamilyTreesModel from "../models/FamilyTreesModel.js";
import moment from 'moment'
import Users from "../models/UserModel.js";
import InvitationModel from "../models/InvitationModel.js";


const prepareMemberData = (body,data = {}) => {
  const allowedFields = ["surname", "dob", "dod","birthTown","profession","relationship"];
  allowedFields.forEach((field) => {
    if (body[field]) {
      
      console.log('field',field)
      
      if ((field === 'dob' || field === 'dod') && body[field] !== '') {
        const date = moment(body[field], 'YYYY-MM-DD', true); // strict parsing
        if (date.isValid()) {
          body[field] = date.format('YYYY-MM-DD');
          data[field] = body[field];
        } else {
          delete body[field];
        }
      } 

      data[field] = body[field];
    }
  });

  return data

}

function buildFamilyTree(data, parentId = null) {
  return data
    .filter((member) => member.parentId === parentId && member.relationship !== "Spouse")
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
      gender: member.gender === 'male' ? 'male' : 'female',
      name: `${member.first_name || "NR"} ${member.surname || ""}`.trim()
    };

    if (member.dob) {
      entry.born = member.dob;
    }

    if (member.profile) {
      entry.photo = member.profile;
    }

    if (parentId !== null) {
      entry.mid = parentId;
    }

    if (member.spouses && member.spouses.length > 0) {
      entry.pids = member.spouses.map(s => s.id);
    }

    result.push(entry);

    // Process spouses
    if (member.spouses && member.spouses.length > 0) {
      member.spouses.forEach(spouse => {
        const spouseEntry = {
          id: spouse.id,
          gender: 'female', // Forced to 'female' as per output requirement
          name: `${spouse.first_name || "NR"} ${spouse.surname || ""}`.trim(),
          pids: [member.id]
        };
        if (spouse.profile) {
          spouseEntry.photo = spouse.profile;
        }
        result.push(spouseEntry);
      });
    }

    // Process children recursively
    if (member.children && member.children.length > 0) {
      member.children.forEach(child => {
        processMember(child, member.id);
      });
    }
  }

  // Start processing each root member
  inputData.forEach(member => {
      processMember(member);
    });

  return result;
}




export const addFamilyNode = async (req, res) => {
  try {
    // Validate required fields
    if (!req.body.first_name) {
      throw new Error("First name is required.");
    }
    if (!req.body.relationship) {
      throw new Error("Relationship is required.");
    }

    // Base data for the new node
    const data = {
      first_name: req.body.first_name,
      userId: req.Auth.id,
      relationship: req.body.relationship,
      gender: req.body.gender,
      surname: req.body.surname || null,
      dob: req.body.dob || null,
      dod: req.body.dod || null,
      birthTown: req.body.birthTown || null,
      profession: req.body.profession || null,
      profile: req.file ? `/images/${req.file.filename}` : "",
    };

    let createdNode = null;

    console.log('req.body',req.body)

    const parentId = req.body.parent ? Number(req.body.parent) : null;

    // Fetch the current member if parentId is provided
    let currentMember = null;
    if (parentId) {
      currentMember = await FamilyTreesModel.findOne({
        where: { id: parentId, userId: req.Auth.id },
      });
      if (!currentMember) {
        throw new Error("Parent member not found.");
      }
    }

    // Fetch the parent's parent if needed
    let currentMemberParent = null;
    if (currentMember && currentMember.parentId) {
      currentMemberParent = await FamilyTreesModel.findOne({
        where: { id: currentMember.parentId, userId: req.Auth.id },
      });
    }

    switch (req.body.relationship) {
      case "Spouse":

        if (!parentId) {
          throw new Error("Parent ID is required to add a spouse.");
        }
        // Spouse shares the same parentId as the partner
        data.parentId = parentId;
        createdNode = await FamilyTreesModel.create(data);
        if (!createdNode) {
          throw new Error("Failed to create spouse. Please try again.");
        }
        break;

      case "Uncle":
        if (!parentId) {
          throw new Error("Parent ID is required to add an uncle.");
        }
        if (!currentMemberParent) {
          throw new Error(
            `Member ${currentMember.first_name} does not have a father node. Please add father first.`
          );
        }
        if (!currentMemberParent.parentId) {
          throw new Error(
            `Member ${currentMember.first_name} does not have a grandfather node. Please add grandfather first.`
          );
        }
        // Uncle shares the grandfather as parent
        data.parentId = currentMemberParent.parentId;
        createdNode = await FamilyTreesModel.create(data);
        if (!createdNode) {
          throw new Error("Failed to create uncle. Please try again.");
        }
        break;

      case "Grand Father":
        if (!parentId) {
          throw new Error("Parent ID is required to add a grandfather.");
        }
        if (!currentMemberParent) {
          throw new Error(
            `Member ${currentMember.first_name} does not have a father node. Please add father first.`
          );
        }
        if (currentMemberParent.parentId) {
          throw new Error(
            `Member ${currentMember.first_name} already has a grandfather.`
          );
        }
        // Grandfather has no parentId
        data.parentId = null;
        createdNode = await FamilyTreesModel.create(data);
        if (!createdNode) {
          throw new Error("Failed to create grandfather. Please try again.");
        }
        // Update the father's parentId to the new grandfather
        currentMemberParent.parentId = createdNode.id;
        await currentMemberParent.save();
        break;

      case "Father":
        if (!parentId) {
          throw new Error("Parent ID is required to add a father.");
        }
        // Father inherits the grandfather's parentId
        data.parentId = currentMemberParent ? currentMemberParent.parentId : null;
        createdNode = await FamilyTreesModel.create(data);
        if (!createdNode) {
          throw new Error("Failed to create father. Please try again.");
        }
        // Update the current member's parentId to the new father
        currentMember.parentId = createdNode.id;
        await currentMember.save();
        break;

      case "Sister":
      case "Brother":
      case "Cousin Sister":
      case "Cousin Brother":
      case "Niece":
      case "Nephew":
      case "Mother In Law":
      case "Father In Law":
      case "Brother In Law":
      case "Sister In Law":
        // Siblings and in-laws share the same parentId as the current member
        data.parentId = currentMember ? currentMember.parentId : parentId;
        createdNode = await FamilyTreesModel.create(data);
        if (!createdNode) {
          throw new Error(
            `Failed to create ${req.body.relationship}. Please try again.`
          );
        }
        break;

      case "Myself":
        // "Myself" should only be added once per user
        const existingMyself = await FamilyTreesModel.findOne({
          where: { userId: req.Auth.id, relationship: "Myself" },
        });
        if (existingMyself) {
          throw new Error("A 'Myself' node already exists for this user.");
        }
        data.isOwner = true;
        data.parentId = parentId;
        createdNode = await FamilyTreesModel.create(data);
        if (!createdNode) {
          throw new Error("Failed to create 'Myself' node. Please try again.");
        }
        break;

      case "Son":
      case "Daughter":
      case "Grand Son":
      case "Grand Daughter":
        // Children use the provided parentId
        data.parentId = parentId;
        createdNode = await FamilyTreesModel.create(data);
        if (!createdNode) {
          throw new Error(
            `Failed to create ${req.body.relationship}. Please try again.`
          );
        }
        break;

      default:
        throw new Error("Invalid relationship type.");
    }

    __.res(res, createdNode, 200);
  } catch (error) {
    console.error("Error in addFamilyNode:", error);
    __._throwError(res, error);
  }
};


export const getFamilyTrees = async (req, res) => {
  try {
    const condition = {
      userId: req.Auth.id,
    };

    console.log('req.body',req.body)

    if(req.body?.userId){
      
      const user = await Users.findByPk(req.body?.userId);
      if(!user) throw new Error('User not found! Please check the user id and try again.')

      // Check its accepted 
     const isAccepted = await InvitationModel.isAccepted(req.body?.userId, req.Auth.id);
      if(!isAccepted && user.allowPublicView == false) throw new Error('This user profile is private! You can not view this family tree.')
      condition.userId = req.body?.userId
    }

    // Fetch all nodes for this user
    const flatMembers = await FamilyTreesModel.findAll({
      where: condition,
      order: [['id', 'ASC']],
    });

    // Build tree
    const tree = buildFamilyTree(flatMembers);

    __.res(res, tree, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};


export const deleteFamilyNode = async (req, res) => {
  try {

    __.validation(["id"], req.body);

    const condition = {
      id  : req.body.id,
      userId : req.Auth.id
    } 
    const node = await FamilyTreesModel.findOne({
      where : condition
    });

    if (!node) throw new Error('This member is already deleted');
    await node.destroy(); 
    
    __.res(res, 'Member node deleted successfully!', 200);

  } catch (error) {
    __._throwError(res, error);
  }
};


export const updateFamilyNode = async (req, res) => {
  try {


    console.log('req.body',req.body)
    __.validation(["id"], req.body);

    const condition = {
      id  : req.body.id,
      userId : req.Auth.id
    } 


    const node = await FamilyTreesModel.findOne({
      where : condition
    });

    if(!node) throw new Error('Oops! unable to find this member!')

   const allowedFields = ['first_name',"surname", "dob", "dod","birthTown","profession","relationship"];

    allowedFields.forEach((field) => {
      if (req.body[field] && req.body[field] != '') {

        if((field == 'dob' || field == 'dod') && req.body[field] != ''){
          const date = moment(req.body[field], 'YYYY-MM-DD', true);
          if (date.isValid()) {
            node[field] =  date.format('YYYY-MM-DD');
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

    if(req.body.profile == 'null'){
      node.profile = ''
    }

    await node.save();
    __.res(res, 'Member updated successfully!', 200);
  
  } catch (error) {
    __._throwError(res, error);
  }
};


export const moveChildNode = async (req, res) => {
  try {

    __.validation(["id","moveTo"], req.body);

    if(req.body.moveTo == req.body.id) throw new Error('Invalid move operation!')

    

    const condition = {
      id  : req.body.id,
      userId : req.Auth.id
    } 

    const node = await FamilyTreesModel.findOne({
      where : condition
    });


    if(!node.parentId) throw new Error(`${node} is root parent! can not move this.`)

    const targetNode = await FamilyTreesModel.findOne({
      where : {
        id : req.body.moveTo,
        userId : req.Auth.id
      }
    });

    if(!targetNode) throw new Error('The target not not found! Please refresh the page and check again.')

    node.parentId = req.body.moveTo
    await node.save();
    __.res(res, node, 200);
  
  } catch (error) {
    __._throwError(res, error);
  }
};



export const createParentNode = async (req, res) => {
  try {


    __.validation(["first_name"], req.body);


     const conditionRoot = { 
      userId : req.Auth.id,
      parentId : null,
    }


    var data = {
      first_name: req.body.first_name,
      userId: req.Auth.id,
      parentId : null
    };

    
    data = prepareMemberData(req.body,data)
    if (req.file) {
      data.profile = `/images/${req.file.filename}`;
    }


    const rootParent =  await FamilyTreesModel.findOne({where : conditionRoot,order: [['id', 'ASC']]})
    if(!rootParent){
      const root = await FamilyTreesModel.create(data);
        __.res(
        res,
        root.toJSON(),
        200
      );
      return false
    }
    // if(!rootParent) throw new Error('There are no any node available')

    const createdNode = await FamilyTreesModel.create(data);
    if(!createdNode) throw new Error('Oops! Failed to create this member! Please try again')

    // Update current user parent
    rootParent.parentId = createdNode.id
    await rootParent.save()

    __.res(
      res,
      createdNode.toJSON(),
      200
    );
  } catch (error) {
    __._throwError(res, error);
  }
};



export const createSibling = async (req, res) => {
  try {

    __.validation(["first_name",'id'], req.body);


     const conditionRoot = { 
      userId : req.Auth.id,
      id : req.body.id
    }

    const currentMember =  await FamilyTreesModel.findOne({where : conditionRoot})
    if(!currentMember) throw new Error('Oops! Selected member not found')

 
    var data = {
      first_name: req.body.first_name,
      userId: req.Auth.id,
      parentId : currentMember.parentId
    };

    data = prepareMemberData(req.body,data)
    if (req.file) {
      data.profile = `/images/${req.file.filename}`;
    }

    const createdNode = await FamilyTreesModel.create(data);
    if(!createdNode) throw new Error('Oops! Failed to create this member! Please try again')

    __.res(
      res,
      createdNode.toJSON(),
      200
    );
  } catch (error) {
    __._throwError(res, error);
  }
};


export const getFamilyMembers = async (req, res) => {
  try {

     const conditionRoot = { 
      userId : req.Auth.id,
    }
    const members =  await FamilyTreesModel.findAll({where : conditionRoot, attributes : ['id', 'first_name', 'surname','relationship', 'profile'], order: [['id', 'ASC']]})
    if(!members) throw new Error('Oops! No family members found for this user')
    __.res(
      res,
      members,
      200
    );
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
        { model: FamilyTreesModel, as: 'children', attributes: ['id', 'relationship'] },
        { model: FamilyTreesModel, as: 'parent', attributes: ['id', 'relationship'] },
       
      ],
    });

    // Transform the data to BALKAN FamilyTreeJS format
    const tree = buildFamilyTree(familyMembers);
    const result = transformFamilyTreeData(tree);

    __.res(res, result, 200);
  } catch (error) {
    console.error('Error fetching family tree data:', error);
    __._throwError(res, error);
  }
};