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
    .filter(member => member.parentId === parentId)
    .map(member => ({
      ...member.dataValues,
      children: buildFamilyTree(data, member.id)
    }));
}


export const addFamilyNode = async (req, res) => {
  try {


    __.validation(["first_name"], req.body);

    var data = {
      first_name: req.body.first_name,
      userId: req.Auth.id,
    };

    if(req.body.parent){
      data.parentId = req.body.parent
    }


    if (req.file) {
      data.profile = `/images/${req.file.filename}`;
    }

    var createdNode = null;

    const currentMemberCondition = {
      userId : req.Auth.id,
      id : data.parentId,
    }

    const currentMember =  await FamilyTreesModel.findOne({where : currentMemberCondition,order: [['id', 'ASC']]})
    if(!currentMember) throw new Error('Current member not found!');

     const currentMemberParentCondition = {
        userId : req.Auth.id,
        id : currentMember.parentId,
      } 
      const currentMemberParent =  await FamilyTreesModel.findOne({where : currentMemberParentCondition,order: [['id', 'ASC']]})
        
    switch(req.body.relationship){

      case 'Spouse':
         
          const spouses =  currentMember.spouses || [];
          const newSpouse = prepareMemberData(req.body,data)
          newSpouse.id = spouses.length + 1;
          currentMember.spouses = [...spouses, newSpouse]
          currentMember.save()

          createdNode = currentMember.toJSON()
        break;

      case 'Uncle':
        if(!data.parentId) throw new Error('Please add this node father first.')
         
          if(!currentMemberParent) throw new Error(`Member ${currentMember.first_name} don't have father node!, please add father first.`)
          if(!currentMemberParent.parentId) throw new Error(`Member ${currentMember.first_name} don't have grand father node!, please add grand father first.`)


          data.parentId = currentMemberParent.parentId
          data = prepareMemberData(req.body,data)

          console.log('data',data)

          createdNode = await FamilyTreesModel.create(data);
          if(!createdNode) throw new Error('Oops! Failed to create this member! Please try again')
          break;

      case 'Grand Father':
        if(!data.parentId) throw new Error('Please add this node father first.')
        if(!currentMemberParent) throw new Error(`Member ${currentMember.first_name} don't have father node!, please add father first.`)
        if(currentMemberParent.parentId) throw new Error(`Member ${currentMember.first_name} already have grand father`)

        data.parentId = null
        data = prepareMemberData(req.body,data)
        createdNode = await FamilyTreesModel.create(data);
        if(!createdNode) throw new Error('Oops! Failed to create this member! Please try again')

        currentMemberParent.parentId = createdNode.id;
        await currentMemberParent.save()
        
        break;

      case 'Father':
        
        // create Father
        data.parentId = currentMemberParent?.parentId
        data = prepareMemberData(req.body,data)
        createdNode = await FamilyTreesModel.create(data);
        currentMember.parentId = createdNode.id;
        await currentMember.save()

        break;


      // Siblings
      case 'Sister':
      case 'Brother':
      case 'Cousin Sister':
      case 'Cousin Brother':
      case 'Niece':
      case 'Nephew':
      case 'Mother In Law':
      case 'Father In Law':
      case 'Brother In Law':
      case 'Sister In Law':

        data.parentId = currentMember.parentId
        data = prepareMemberData(req.body,data)
        createdNode = await FamilyTreesModel.create(data);
        if(!createdNode) throw new Error('Oops! Failed to create this member! Please try again')
        break;

      // Children
      default:
        data = prepareMemberData(req.body,data)
        createdNode = await FamilyTreesModel.create(data);
        if(!createdNode) throw new Error('Oops! Failed to create this member! Please try again')

    }
  
    __.res(
      res,
      createdNode,
      200
    );
  } catch (error) {
    __._throwError(res, error);
  }
};


export const getFamilyTrees = async (req, res) => {
  try {
    const condition = {
      userId: req.Auth.id,
    };

    if(req.body.userId){
      
      const user = await Users.findByPk(req.body.userId);
      if(!user) throw new Error('User not found! Please check the user id and try again.')

      // Check its accepted 
     const isAccepted = await InvitationModel.isAccepted(req.body.userId, req.Auth.id);
      if(!isAccepted && user.allowPublicView == false) throw new Error('This user profile is private! You can not view this family tree.')
      condition.userId = req.body.userId
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

    const rootParent =  await FamilyTreesModel.findOne({where : conditionRoot,order: [['id', 'ASC']]})
    if(!rootParent) throw new Error('There are no any node available')

 
    var data = {
      first_name: req.body.first_name,
      userId: req.Auth.id,
      parentId : null
    };

    
    data = prepareMemberData(req.body,data)
    if (req.file) {
      data.profile = `/images/${req.file.filename}`;
    }

    console.log('data',data)

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
