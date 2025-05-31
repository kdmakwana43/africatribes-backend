import { Op } from "sequelize";
import { __ } from "../config/global.js";
import FamilyTreesModel from "../models/FamilyTreesModel.js";
import moment from 'moment'


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

    console.log('req.body',req.body)

    __.validation(["first_name"], req.body);

    const data = {
      first_name: req.body.first_name,
      userId: req.Auth.id,
    };

    if(req.body.parent){
      data.parentId = req.body.parent
    }

    const allowedFields = ["surname", "dob", "dod","birthTown","profession","relationship"];
    allowedFields.forEach((field) => {
      if (req.body[field]) {
        
        if((field == 'dob' || field == 'dod') && req.body[field] != ''){
          req.body[field] = moment(req.body[field],'YYYY-MM-DD').toDate();
          // req.body[field] = req.body[field]
        } else {
          delete req.body[field]
        }

        data[field] = req.body[field];
      }
    });

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


export const getFamilyTrees = async (req, res) => {
  try {
    const condition = {
      userId: req.Auth.id,
    };

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

    console.log('condition',condition)

    const node = await FamilyTreesModel.findOne({
      where : condition
    });

    if(!node) throw new Error('Oops! unable to find this member!')

   const allowedFields = ['first_name',"surname", "dob", "dod","birthTown","profession","relationship"];
    const updateData = {};

    allowedFields.forEach((field) => {
      if (req.body[field]) {

        if((field == 'dob' || field == 'dod') && req.body[field] != ''){
          req.body[field] = moment(req.body[field],'YYYY-MM-DD').toDate();
          // req.body[field] = req.body[field]
        } else {
          delete req.body[field]
        }
        updateData[field] = req.body[field];
      }
    });

    if (req.file) {
      updateData.profile = `/images/${req.file.filename}`;
    }

    await node.update(updateData);
    __.res(res, node, 200);
  
  } catch (error) {
    __._throwError(res, error);
  }
};


export const moveChildNode = async (req, res) => {
  try {

    __.validation(["id","moveTo"], req.body);

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
