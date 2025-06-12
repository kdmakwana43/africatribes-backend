import { Op } from "sequelize";
import { __ } from "../config/global.js";
import FamilyTreesModel from "../models/FamilyTreesModel.js";
import moment from 'moment'
import Users from "../models/UserModel.js";
import InvitationModel from "../models/InvitationModel.js";


const prepareMemberData = (body,data = {}) => {
  const allowedFields = ['first_name',"surname", "dob", "dod","birthTown","profession","relationship"];
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
      name: `${member.first_name || ""} ${member.surname || ""}`.trim(),
      dob: member.dob ? moment(member.dob).format('YYYY-MM-DD') : null,
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
          name: `${spouse.first_name || ""} ${spouse.surname || ""}`.trim(),
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


const createMemberNode = async (req) =>  {
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
      balkan_key: req.body.balkan_key || null,
      fid: req.body.fid || null,
      mid: req.body.mid || null,
      pids: req.body.pids  ? JSON.stringify(req.body.pids) : null,
      profile: req.file ? `/images/${req.file.filename}` : "",
    };

    let createdNode = null;

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

    return createdNode
  } catch (error) {
   throw new Error(`Failed to create member node: ${error.message}`);
  }
}

function transformFamilyTreeKitkat(data) {
  /// Map to store new IDs (original ID -> new ID)
    const idMap = new Map();
    let newId = 1;

    // Collect all individuals by traversing the nested structure
    const individuals = [];

    function collectIndividuals(person) {
        if (!person || individuals.some(p => p.id === person.id)) return;
        individuals.push(person);
        person.spouses.forEach(spouse => collectIndividuals(spouse));
        person.children.forEach(child => collectIndividuals(child));
    }

    // Start collecting from the root
    data.forEach(root => collectIndividuals(root));

    // Assign new IDs (1 to N), prioritizing "Myself"
    const myself = individuals.find(p => p.relationship === "Myself");
    if (myself) {
        idMap.set(myself.id, newId++);
    }
    individuals.forEach(person => {
        if (person.relationship !== "Myself" && !idMap.has(person.id)) {
            idMap.set(person.id, newId++);
        }
    });

    // Transform each individual
    const result = individuals.map(person => {
        const newPerson = {
            id: idMap.get(person.id),
            originalId: person.id,
            name: `${person.first_name} ${person.surname}`.trim()
        };

        // Add photo if available
        if (person.profile) {
            newPerson.photo = person.profile.match('http') ? person.profile : `${process.env.BASE_URL}${person.profile}`;
        }

        // Determine parent relationships (only for non-spouse individuals with a valid parentId)
        if (person.parentId && person.relationship !== "Spouse") {
            const parent = individuals.find(p => p.id === person.parentId);
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
        const isSpouse = individuals.some(p => p.spouses.some(s => s.id === person.id));
        if (person.spouses.length > 0 || isSpouse) {
            // Collect spouse IDs from person's spouses array
            let spouseIds = person.spouses.map(spouse => idMap.get(spouse.id));
            // Add person as a spouse if they appear in another person's spouses array
            individuals.forEach(p => {
                if (p.spouses.some(s => s.id === person.id) && !spouseIds.includes(idMap.get(p.id))) {
                    spouseIds.push(idMap.get(p.id));
                }
            });
            if (spouseIds.length > 0) {
                newPerson.spouseIds = spouseIds.sort((a, b) => a - b);
            }
        }

        // Add child IDs (from person's children and as spouse's children)
        let childIds = person.children.map(child => idMap.get(child.id));
        // Add children from spouse's children array if person is a spouse
        if (isSpouse) {
            individuals.forEach(p => {
                if (p.spouses.some(s => s.id === person.id)) {
                    childIds = [...childIds, ...p.children.map(child => idMap.get(child.id))];
                }
            });
        }
        if (childIds.length > 0) {
            newPerson.childIds = [...new Set(childIds)].sort((a, b) => a - b);
        }

        // Add sibling IDs (siblings share the same parents, exclude spouses)
        if (person.parentId && person.relationship !== "Spouse") {
            const parent = individuals.find(p => p.id === person.parentId);
            if (parent) {
                // Get all children of the parent
                let parentChildren = parent.children.map(child => idMap.get(child.id));
                // Get children of the parent's spouse (if any)
                let spouseChildren = parent.spouses.length > 0
                    ? parent.spouses[0].children.map(child => idMap.get(child.id))
                    : [];
                // Combine and filter to get siblings (exclude self and spouses)
                const siblingIds = [...new Set([...parentChildren, ...spouseChildren])]
                    .filter(id => id !== newPerson.id && individuals.find(p => idMap.get(p.id) === id).relationship !== "Spouse");
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
    if(!response) throw new Error('Failed to create this member! Please try again')
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


export const getFamilyTreesPublic = async (req, res) => {
  try {


    if(!req.body?.userId) throw new Error('invalid request')

    const condition = {
      userId: req.body?.userId,
    };

     const user = await Users.findByPk(req.body?.userId);
    if(!user) throw new Error('User not found! Please check the user id and try again.')

    // Check its accepted 
    if(user.allowPublicView == false) throw new Error('This user profile is private! You can not view this family tree.')

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
      userId : req.Auth.id
    } 


    if(isNaN(Number(req.body.id))){
      condition.balkan_key = req.body.id
    } else {
      condition.id =  req.body.id;
    }
    const node = await FamilyTreesModel.findOne({
      where : condition
    });

    if (!node) throw new Error('This member is already deleted or not saved yet');
    await node.destroy(); 
    
    __.res(res, 'Member node deleted successfully!', 200);

  } catch (error) {
    __._throwError(res, error);
  }
};


export const updateFamilyNode = async (req, res) => {
  try {


    __.validation(["id"], req.body);

    const condition = {
      userId : req.Auth.id
    } 

    var isBalkan = false

    if(isNaN(Number(req.body.id))){
      condition.balkan_key = req.body.id
      isBalkan = true
    } else {
      condition.id =  req.body.id;
    }

    


    var node = await FamilyTreesModel.findOne({
      where : condition
    });

    if(isBalkan && !node){
      var newMemberData = {
        first_name: req.body.first_name ?? 'New Member',
        userId: req.Auth.id,
        parentId : null
      }
      newMemberData = prepareMemberData(req.body,newMemberData)
      if (req.file) {
        newMemberData.profile = `/images/${req.file.filename}`;
      }
      node =  await FamilyTreesModel.create(newMemberData)
    }

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

    if(req.body.fid){

      const findParent =  await FamilyTreesModel.findOne({
        where : {
          balkan_key : req.body.fid,
          userId : req.Auth.id
        }
      })

      if(findParent){
        node.parentId = findParent.id;
      }
    }

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


    if(!node.parentId) throw new Error(`${node.first_name} is root parent! can not move this.`)

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
        { model: FamilyTreesModel, as: 'children', attributes: ['id', 'relationship', 'dob', 'dod', 'birthTown', 'profession'] },
        { model: FamilyTreesModel, as: 'parent', attributes: ['id', 'relationship', 'dob', 'dod', 'birthTown', 'profession'] },

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


export const createBalkanNewNodes = async (req, res) => {
  try {

    __.validation(["members"], req.body);

    if(!Array.isArray(req.body.members) || req.body.members.length == 0) throw new Error('Please provide valid members data to create')


    var members = [...req.body.members]

    members.forEach( async (member) => {
     
      try {
        req.body.first_name = member.name;
        req.body.parent = member.parent;
        req.body.relationship = member.relationship;
        req.body.gender = member.gender;
        req.body.balkan_key = member.balkan_key;
        const response = await createMemberNode(req);
        console.log('response',response)
      } catch (error) {
        console.error(`Failed to create member ${member.first_name}:`, error.message);
      }

    });

    __.res(
      res,
      'Family members saved successfully!',
      200
    );
  } catch (error) {
    __._throwError(res, error);
  }
};
