import { __ } from "../config/global.js";
import { getOtpTemplate, sendEmail } from "../config/node-mailer.js";
import ContributionModel from "../models/ContributionModel.js";
import CountryModel from "../models/CountryModel.js";
import FamilyTreesModel from "../models/FamilyTreesModel.js";
import InvitationModel from "../models/InvitationModel.js";
import NewsletterModel from "../models/NewsletterModel.js";
import TokenModal from "../models/TokenModal.js";

import Users from "../models/UserModel.js";
import JWT from "jsonwebtoken";
import { Op, Sequelize } from "sequelize";
export const userRegister = async (req, res) => {
  try {
    __.validation(
      [
        "first_name",
        "last_name",
        "email",
        "password",
        "dob",
        "gender",
        "countryId",
      ],
      req.body
    );

    const condition = {
      email: req.body.email.toLowerCase(),
    };

    const isExistUser = await Users.findOne({ where: condition });

    if (isExistUser) {
      throw new Error(
        `${req.body.email} is already registered! Please try another email.`
      );
    }

    const hasPass = __.hasPassword(req.body.password, 10);

    const payload = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email.toLowerCase(),
      password: hasPass,
      dob: req.body.dob,
      gender: req.body.gender,
      countryId: req.body.countryId,
      hometown: req.body.hometown || null,
      tribe: req.body.tribe || null,
      village: req.body.village || null,
    };

    const user = await Users.create(payload);

    // Create family node
    try {
      
      const member = {
        userId : user.id,
        first_name : user.first_name,
        surname : user.last_name,
        dob :  user.dob,
        birthTown : user.hometown,
        relationship : 'Myself',
        isOwner : true,
        gender : user.gender
      }
      await FamilyTreesModel.create(member);
      console.log('Member created')

    } catch (error) {
      console.log('Oops! unable to create family member',error)
    }


    if (req.body.subscribeNewsletter) {
      try {
        const isExist = await NewsletterModel.findOne({
          where: {
            email: req.body.email.toLowerCase(),
          },
        });
        if (!isExist) {
          const data = {
            email: req.body.email.toLowerCase(),
          };
          await NewsletterModel.create(data);
        }
      } catch (error) {
        console.log("error", error);
      }
    }

    __.res(res, "User registered successfully.", 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const userLogin = async (req, res) => {
  try {
    __.validation(["email", "password"], req.body);

    const condition = {
      email: req.body.email.toLowerCase(),
    };

    const user = await Users.findOne({ where: condition });

    if (!user) {
      throw new Error(`Email is not exit! Please check your Email.`);
    }

    const isPasswordValid = __.compressPassword(
      req.body.password,
      user.password
    );

    if (!isPasswordValid) {
      throw new Error("Invalid password! Please check your password.");
    }

    const token = JWT.sign({ id: user.id }, process.env.JWT_SECRET);

    const userResponse = {
      ...user.toJSON(),
      password: undefined,
      token,
    };

    __.res(res, userResponse, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const userProfileUpdate = async (req, res) => {
  try {
    const condition = {
      id: req.Auth.id,
    };
    console.log("req", req.body);
    const user = await Users.findOne({ where: condition });

    if (req.body.email) {
      const emailCondition = {
        email: req.body.email,
        id: {
          [Op.ne]: req.Auth.id,
        },
      };

      const isExist = await Users.findOne({ where: emailCondition });
      if (isExist) {
        throw new Error(
          `This User is already associated with ${req.body.email}`
        );
      }
    }

    if (req.file) {
      req.body.profile = `/images/${req.file.filename}`;
    }

    const NOT_ALLOW_UPDATE = [
      "id",
      "__v",
      "createdAt",
      "updatedAt",
      "password",
      "status",
    ];

    // Update fields
    Object.keys(req.body).forEach((key) => {
      if (NOT_ALLOW_UPDATE.indexOf(key) == -1) {
        user[key] = req.body[key];
      }
    });

    await user.save();
    __.res(res, __.authResponse(user.toJSON()), 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const userPasswordUpdate = async (req, res) => {
  try {
    __.validation(["old_password", "new_password"], req.body);

    const condition = {
      id: req.Auth.id,
    };

    const user = await Users.findOne({ where: condition });

    const isOldPasswordValid = __.compressPassword(
      req.body.old_password,
      user.password
    );

    if (!isOldPasswordValid) {
      throw new Error("Invalid old password.");
    }

    const pass = __.hasPassword(req.body.new_password);
    user.password = pass;

    await user.save();
    __.res(res, "Password Update Successfully.", 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const uploadFile = async (req, res) => {
  try {
    if (req.file) {
      __.res(res, "/images/" + req.file.filename, 200);
    } else {
      throw new Error("Oops! Failed to upload File or image.");
    }
  } catch (error) {
    __._throwError(res, error);
  }
};
export const userForgotPassword = async (req, res) => {
  try {
    __.validation(["email"], req.body);

    const condition = {
      email: req.body.email.toLowerCase(),
    };

    const isExistUser = await Users.findOne({ where: condition });

    if (!isExistUser) {
      throw new Error(`Email is not exit! Please check your Email. `);
    }

    const token = __.generateToken();

    sendEmail(req.body.email, "Forgot Password", getOtpTemplate(token));

    const payload = {
      token: token,
      user: isExistUser.id,
    };

    await TokenModal.create(payload);
    __.res(res, "Password reset link has been sent to your email!", 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const userResetPassword = async (req, res) => {
  try {
    __.validation(["token", "new_password"], req.body);

    const condition = {
      token: req.body.token,
      status: "Active",
    };

    const isExistToken = await TokenModal.findOne({ where: condition });

    if (!isExistToken) {
      throw new Error(`Invalid token!`);
    }

    const user = await Users.findOne({ where: { id: isExistToken.user } });

    if (!user) {
      throw new Error(`User not found!`);
    }

    const pass = __.hasPassword(req.body.new_password);
    user.password = pass;

    await user.save();
    isExistToken.status = "Deactivated";
    await isExistToken.save();

    __.res(res, "Password reset successfully.", 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const condition = {
      id: req.Auth.id,
    };

    const user = await Users.findOne({ where: condition });

    __.res(res, __.authResponse(user), 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const getCountries = async (req, res) => {
  try {
    const condition = {
      status: "Active",
    };

    const countries = await CountryModel.findAll({ where: condition });

    __.res(res, countries, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const subscribeNewsletter = async (req, res) => {
  try {
    __.validation(["email"], req.body);

    const condition = {
      email: req.body.email.toLowerCase(),
    };

    const isExist = await NewsletterModel.findOne({ where: condition });
    if (isExist) throw new Error("You already subscribed our newsletters");

    const data = {
      email: req.body.email.toLowerCase(),
    };
    await NewsletterModel.create(data);
    __.res(res, "Thank you for subscribe newsletter!", 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const addContribution = async (req, res) => {
  try {
    __.validation(["title", "category"], req.body);

    const { title, category, description } = req.body;

    const payload = {
      userId: req.Auth.id,
      title,
      category,
      description,
    };

    const contribution = await ContributionModel.create(payload);

    __.res(res, contribution, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const getContribution = async (req, res) => {
  try {
    __.validation(["id"], req.body);
    const { id } = req.body;

    const condition = {
      id: id,
      userId: req.Auth.id,
    };

    const contribution = await ContributionModel.findOne({ where: condition });
    if (!contribution) throw new Error("Contribution not found.");

    __.res(res, contribution, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const listContributions = async (req, res) => {
  try {
    const { skip = 0, limit = 10, sort = "createdAt:DESC" } = req.query;

    const [sortField, sortOrder] = sort.split(":");

    const contributions = await ContributionModel.findAll({
      where : {
          userId : req.Auth.id
      },
      offset: parseInt(skip),
      limit: parseInt(limit),
      order: [[sortField || "createdAt", sortOrder?.toUpperCase() || "DESC"]],
    });

    __.res(res, contributions, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const updateContribution = async (req, res) => {
  try {
    __.validation(["id"], req.body);

    const { id } = req.body;

    const condition = {
      id: id,
      userId: req.Auth.id,
    };

    const contribution = await ContributionModel.findOne({ where: condition });
    if (!contribution) {
      throw new Error("Contribution not found or unauthorized.");
    }

    const allowedFields = ["title", "category", "description"];
    const updateData = {};

    allowedFields.forEach((field) => {
      if (req.body.hasOwnProperty(field)) {
        updateData[field] = req.body[field];
      }
    });

    await contribution.update(updateData);

    __.res(res, contribution, 200);
  } catch (error) {
    __._throwError(res, error);
  }
};

export const deleteContribution = async (req, res) => {
  try {
    __.validation(["id"], req.body);

    const { id } = req.body;

    const condition = {
      id: id,
      userId: req.Auth.id,
    };

    const contribution = await ContributionModel.findOne({ where: condition });
    if (!contribution) throw new Error("Contribution not found.");

    await contribution.destroy();

    __.res(res, "Contribution deleted successfully.", 200);
  } catch (error) {
    __._throwError(res, error);
  }
};


export const getUsers = async (req, res) => {
  try {

    const { skip = 0, limit = 18, sort = "createdAt:DESC" } = req.body;
    const [sortField, sortOrder] = sort.split(":");

    const condition = {
      status : 'Active'
    }

    if(req.body.countryId){
      condition.countryId = req.body.countryId
    }


    if (req.body.char && req.body.char.trim() !== '') {
      condition.first_name = {
        [Op.like]: `${req.body.char}%`
      };
    }

    if (req.body.search && req.body.search.trim() !== '') {
        const searchTerm = req.body.search.trim();

        condition[Op.or]= [
            { first_name: { [Op.like]: `%${searchTerm}%` } },
            { last_name: { [Op.like]: `%${searchTerm}%` } },
            { village: { [Op.like]: `%${searchTerm}%` } },
            { tribe: { [Op.like]: `%${searchTerm}%` } },
            { hometown: { [Op.like]: `%${searchTerm}%` } },
          ]
    }

    const masterSearchFields = ['first_name', 'last_name', 'village', 'tribe', 'hometown', 'chief', 'alias', 'totem'];
    masterSearchFields.forEach(field => {
      if (req.body[field] && req.body[field].trim() !== '') {
        condition[field] = req.body[field].trim();
      }
    });

    console.log('condition',condition)

    const users = await Users.findAll({
      where : condition,
      offset : skip,
      limit : limit,
      order : [[ sortField || 'createdAt', sortOrder || 'DESC' ]],
      attributes: ['id', 'first_name', 'last_name','email','gender','profile','village','tribe','hometown'],
      include: [{
        model: CountryModel,
        as: 'country',
        attributes: ['name'],
      }],
    })

    const totalMatchCount =  await Users.count({
      where : condition,
    })

    __.res(res, { users, totalMatchCount }, 200);

  } catch (error) {
     __._throwError(res, error);
  }
}

export const totalUsersCount = async (req, res) => {
  try {

    const condition = {
      status : 'Active'
    }

    const totalMatchCount =  await Users.count({
      where : condition,
    })
    
    __.res(res, totalMatchCount, 200);

  } catch (error) {
     __._throwError(res, error);
  }
}

export const requestForJoinFamily = async (req, res) => {
  try {

    const { userId } = req.body
    if(!userId) throw new Error('Invalid arguments')

    const condition = {
      id: userId,
    };

    const isExistUser = await Users.findOne({ where: condition });

    if(!isExistUser) throw new Error('Oops! there are no any user found!')
    if(isExistUser.status !== 'Active') throw new Error('This user is not more active!')

    // Check existing invitations

    const invitationCondition = {
      requestedTo : userId,
      userId : req.Auth.id
    }
    const isExistInvitation = await InvitationModel.findOne({ where: invitationCondition }); 

    if(isExistInvitation && isExistInvitation.status == 'Pending') throw new Error('You already requested to join family! Please wait for accept or reject.') 
    if(isExistInvitation && isExistInvitation.status == 'Approved') throw new Error('You already joined this family!') 
    if(isExistInvitation && isExistInvitation.status == 'Rejected') throw new Error('The user rejected your request already!') 


    if(isExistInvitation) throw new Error('Join request already sent!')  



    const data = {
      userId : req.Auth.id,
      requestedTo : userId,
      status : 'Pending'
    }

    await InvitationModel.create(data)
    __.res(res, `Request send successfully to ${isExistUser.first_name} ${isExistUser.last_name}`, 200);
    

  } catch (error) {
     __._throwError(res, error);
  }
}


export const getInvitationsList = async (req, res) => {
  try {


    const { skip = 0, limit = 10, sort = "createdAt:DESC" } = req.body;
    const [sortField, sortOrder] = sort.split(":");
   
    const condition = {
      requestedTo: req.Auth.id,
      status : 'Pending'
    };
    const invitations = await InvitationModel.findAll({ 
      where: condition,
      offset : parseInt(skip),
      limit : parseInt(limit),
      order : [ [ sortField || 'createdAt', sortOrder || 'DESC' ] ],
      include : [
        {
          model : Users,
          as : 'user',
          attributes : ['first_name','last_name','profile','gender']
        }
      ]
    }); 
     if(req.body.wantCount){
      const totalMatchCount = await InvitationModel.count({ where: condition }); 
      __.res(res,{invitations,totalMatchCount}, 200);

     } else {
      __.res(res,invitations, 200);
     }

  } catch (error) {
     __._throwError(res, error);
  }
}

export const getPendingInvitationCount = async (req, res) => {
  try {

    const condition = {
      requestedTo: req.Auth.id,
      status : 'Pending'
    };
    const totalMatchCount = await InvitationModel.count({ where: condition }); 
    __.res(res,totalMatchCount, 200);

  } catch (error) {
     __._throwError(res, error);
  }
}






export const acceptOrRejectInvitation = async (req, res) => {
  try {


    __.validation(["id",'status'], req.body);

    const { id,status } = req.body

    if(!['Approved','Rejected'].includes(status)) throw new Error('Invalid status')

    const invitationCondition = {
      id : id,
      requestedTo : req.Auth.id,
    }

    const isExistInvitation = await InvitationModel.findOne({ where: invitationCondition }); 
    if(!isExistInvitation) throw new Error('Oops! Invitation not found!') 

    if(isExistInvitation && isExistInvitation.status != 'Pending') throw new Error(`This invitation is already ${isExistInvitation.status}`) 
    isExistInvitation.status  = status
    await isExistInvitation.save()
    __.res(res, `Invitation ${status} successfully`, 200);

  } catch (error) {
     __._throwError(res, error);
  }
}


export const getAcceptedInvitations = async (req, res) => {
  try {


    const { skip = 0, limit = 10, sort = "createdAt:DESC" } = req.body;
    const [sortField, sortOrder] = sort.split(":");
   
    const condition = {
      requestedTo: req.Auth.id,
      status : 'Approved'
    };
    const invitations = await InvitationModel.findAll({ 
      where: condition,
      offset : parseInt(skip),
      limit : parseInt(limit),
      order : [ [ sortField || 'createdAt', sortOrder || 'DESC' ] ],
      include : [
        {
          model : Users,
          as : 'user',
          attributes : ['first_name','last_name','profile','gender']
        }
      ]
    }); 
     if(req.body.wantCount){
      const totalMatchCount = await InvitationModel.count({ where: condition }); 
      __.res(res,{invitations,totalMatchCount}, 200);

     } else {
      __.res(res,invitations, 200);
     }

  } catch (error) {
     __._throwError(res, error);
  }
}

export const deleteInvitation = async (req, res) => {
  try {
    __.validation(["id"], req.body);

    const { id } = req.body;

    const condition = {
      id: id,
      [Op.or]: [
        { userId: req.Auth.id },
        { requestedTo: req.Auth.id }
      ]
    };

    const invitation = await InvitationModel.findOne({ where: condition });
    if (!invitation) throw new Error("invitation not found.");

    await invitation.destroy();

    __.res(res, "invitation deleted successfully.", 200);
  } catch (error) {
    __._throwError(res, error);
  }
};



export const getSuggestedRelations = async (req, res) => {
  try {


    const { skip = 0, limit = 10, sort = "createdAt:DESC" } = req.body;
    const [sortField, sortOrder] = sort.split(":");
   
    const condition = {
      userId: req.Auth.id,
      status : 'Pending'
    };
    const invitations = await InvitationModel.findAll({ 
      where: condition,
      offset : parseInt(skip),
      limit : parseInt(limit),
      order : [ [ sortField || 'createdAt', sortOrder || 'DESC' ] ],
      include : [
        {
          model : Users,
          as : 'requestedToUser',
          attributes : ['first_name','last_name','profile','gender','tribe','village','hometown']
        }
      ]
    }); 
     if(req.body.wantCount){
      const totalMatchCount = await InvitationModel.count({ where: condition }); 
      __.res(res,{invitations,totalMatchCount}, 200);

     } else {
      __.res(res,invitations, 200);
     }

  } catch (error) {
     __._throwError(res, error);
  }
}


export const searchFromAll = async (req, res) => {
  try {

    if(!req.body.search || req.body.search.trim() === '') throw new Error('Please provide a search term');

    const condition = {
      status : 'Active'
    }

   

    if (req.body.search && req.body.search.trim() !== '') {
        const searchTerm = req.body.search.trim();
        condition[Op.or]= [
            { first_name: { [Op.like]: `%${searchTerm}%` } },
            { last_name: { [Op.like]: `%${searchTerm}%` } },
            { village: { [Op.like]: `%${searchTerm}%` } },
            { tribe: { [Op.like]: `%${searchTerm}%` } },
            { hometown: { [Op.like]: `%${searchTerm}%` } },
            { chief: { [Op.like]: `%${searchTerm}%` } },
          ]
    }

    const users = await Users.findAll({
      where : condition,
      offset : 0,
      limit : 25,
      order : [[ 'createdAt','DESC' ]],
      attributes: ['id', 'first_name', 'last_name','email','gender','profile','village','tribe','hometown'],
      include: [{
        model: CountryModel,
        as: 'country',
        attributes: ['name'],
      }],
    })


    const results = {
      users : {
        count : users.length,
        data : users,
        label : 'Users'
      }
    }

    // Search in contributions Places
    if (req.body.search && req.body.search.trim() !== '') {
      const searchTerm = req.body.search.trim();

      const contributionsPlaces = await ContributionModel.findAll({
        where: {
          [Op.or]: [
            { title: { [Op.like]: `%${searchTerm}%` } },
            { description: { [Op.like]: `%${searchTerm}%` } },
          ],
          category : 'Places',
        },
        limit: 25,
        order: [['createdAt', 'DESC']],
        include: [{
          model: Users,
          as: 'user',
          attributes: ['first_name', 'last_name', 'profile'],
        }],
      });


      const contributionsPeople = await ContributionModel.findAll({
        where: {
          [Op.or]: [
            { title: { [Op.like]: `%${searchTerm}%` } },
            { description: { [Op.like]: `%${searchTerm}%` } },
          ],
          category : 'People',
        },
        include: [{
          model: Users,
          as: 'user',
          attributes: ['first_name', 'last_name', 'profile'],
        }],
        limit: 25,
        order: [['createdAt', 'DESC']],
      });

      results.contributionsPlaces = {
        count: contributionsPlaces.length,
        data: contributionsPlaces,
        label: 'Contributions Places',
      };

      results.contributionsPeople = {
        count: contributionsPeople.length,
        data: contributionsPeople,
        label: 'Contributions People',
      };

    }
    __.res(res, results, 200);

  } catch (error) {
    __._throwError(res, error);
  }
}




export const getLandingPageStates = async (req, res) => {
  try {

    const totalUniqueFamily = await Users.count({
      distinct: true,
      col: 'last_name',
      where: {
        status: 'Active',
        last_name: {
         [Op.and]: [
          { [Op.ne]: null },
          { [Op.ne]: '' },
        ]
        },
      },
    })

    const totalUniqueTribes = await Users.count({
      distinct: true,
      col: 'tribe',
      where: {
        status: 'Active',
        tribe: {
         [Op.and]: [
          { [Op.ne]: null },
          { [Op.ne]: '' },
        ]
        },
      },
    })

    const totalUniqueChiefs = await Users.count({
      distinct: true,
      col: 'chief',
      where: {
        status: 'Active',
        chief: {
          [Op.and]: [
          { [Op.ne]: null },
          { [Op.ne]: '' },
        ]
        },
      },
    })

    __.res(res, { totalUniqueFamily, totalUniqueTribes, totalUniqueChiefs }, 200);
  } catch (error) {
    __._throwError(res, error);
  }
}


export const getUsersGroup = async (req, res) => {
  try {

    if(!req.body.group) throw new Error('Please provide a group name');


    const allowedFields = ['last_name','village', 'tribe', 'hometown', 'chief', 'alias', 'totem'];
    if (!allowedFields.includes(req.body.group)) {
      throw new Error(`Invalid group name. Allowed groups are: ${allowedFields.join(', ')}`);
    }


    const { skip = 0, limit = 10, sort = "createdAt:DESC" } = req.body;
    const [sortField, sortOrder] = sort.split(":");

    const condition = {
      status: 'Active',
      [req.body.group]: {
        [Op.and]: [
          { [Op.ne]: null },
          { [Op.ne]: '' },
        ]
      },
    };

    if (req.body.char && req.body.char.trim() !== '') {
      condition[req.body.group] = {
        [Op.like]: `${req.body.char}%`
      };
    }

    const users = await Users.findAll({
      attributes: [
        [Sequelize.col(req.body.group), req.body.group],
        [Sequelize.fn('COUNT', Sequelize.col('*')), 'count']
      ],
      where: condition,
      group: [req.body.group],
      order: [[Sequelize.col(req.body.group), sortOrder?.toUpperCase() || 'DESC']],
    });

    if(req.body.wantCount){
      const totalMatchCount = await Users.count({
        distinct: true,
        col: req.body.group,
        where: condition,
      });
      __.res(res, { users, totalMatchCount }, 200);
      return false;
    }

    __.res(res, users, 200);
  } catch (error) {
    __._throwError(res, error);
  }
}