// admin.js
import AdminJS from "adminjs";
import AdminJSExpress, { buildAuthenticatedRouter } from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/sequelize";
import path from "path";

import { ComponentLoader, DefaultAuthProvider } from "adminjs";
import { hasPassword } from "../config/common.js";
import { APP_PATH, BASE_URL } from "../config/global.js";

import Users from "../models/UserModel.js";
import SponsorModel from "../models/SponsorModel.js";
import CountryModel from "../models/CountryModel.js";
import BlogModel from "../models/BlogModel.js";
import NewsletterModel from "../models/NewsletterModel.js";
import ContactUsModel from "../models/ContactUsModel.js";
import ContributionModel from "../models/ContributionModel.js";
import AboutUsModel from "../models/AboutUsModel.js";
import WhyAfrikatribePageModel from "../models/WhyAfrikatribePageModel.js";
import PricingOptionPageModel from "../models/PricingOptionPageModel.js";
import PrivacyPolicyPageModel from "../models/PrivacyPolicyPageModel.js";
import TermsAndConditionPageModel from "../models/TermsAndConditionPageModel.js";
import FAQModel from "../models/FAQModel.js";
import DisclaimerPageModel from "../models/DisclaimerPageModel.js";
import BannerModel from "../models/BannerModel.js";
import InvitationModel from "../models/InvitationModel.js";
import FamilyTreesModel from "../models/FamilyTreesModel.js";
import ContactUsPageModel from "../models/ContactUsPageModel.js";
import GroupChatsModel from "../models/GroupChatsModel.js";
import GroupModel from "../models/GroupModel.js";

AdminJS.registerAdapter(AdminJSMongoose);

// Initialize component loader
const componentLoader = new ComponentLoader();
const COMPONENTS = {
  Dashboard: componentLoader.add(
    "Dashboard",
    path.join(APP_PATH, "admin/Dashboard")
  ),
  UploadImage: componentLoader.add(
    "UploadImage",
    path.join(APP_PATH, "admin/ImageUploader")
  ),
  ShowImage: componentLoader.add(
    "ShowImage",
    path.join(APP_PATH, "admin/ShowImage")
  ),
};

const dashboardHandler = async () => {
  //   const userCount = await UserModel.countDocuments();
  return {
    "Total Users": 1,
  };
};

const userResourceOptions = {
  parent: {
    name: "Users",
    icon: "Users",
  },
  listProperties: [
    "createdAt",
    "profile",
    "first_name",
    "last_name",
    "email",
    "gender",
    "countryId",
  ],
  properties: {
    password: {
      isVisible: {
        list: false,
        show: true,
        edit: true,
        filter: false,
      },
    },
    profile: {
      components: {
        show: COMPONENTS.ShowImage,
        list: COMPONENTS.ShowImage,
        edit: COMPONENTS.UploadImage,
      },
      custom: {
        styles: {
          show: {
            height: 100,
            width: 100,
            borderRadius: "8px",
          },
          list: {
            height: 40,
            width: 40,
            borderRadius: "50%",
          },
        },
      },
    },
  },
  actions: {
    new: {
      before: async (request) => {
        if (request.payload?.password) {
          const hashedPassword = hasPassword(request.payload.password);
          request.payload.password = hashedPassword;
        }
        return request;
      },
    },
    edit: {
      before: async (request) => {
        if (request.payload?.password) {
          const hashedPassword = hasPassword(request.payload.password);
          request.payload.password = hashedPassword;
        } else {
          delete request.payload.password;
        }
        return request;
      },
    },
  },
};

const adminJs = new AdminJS({
  componentLoader,
  branding: {
    logo: `${BASE_URL}/assets/africatribes_logo.svg`,
    companyName: "Afrikatribes",
    softwareBrothers: false,
  },
  resources: [
    {
      resource: Users,
      options: userResourceOptions,
    },
    {
      resource: ContributionModel,
      options: {
        parent: {
          name: "Users",
        },
        listProperties: ["createdAt", "userId", "title", "category"],
      },
    },
    {
      resource: InvitationModel,
      options: {
        parent: {
          name: "Users",
        },
        listProperties: ["createdAt", "userId", "requestedTo", "status"],
      },
    },
    {
      resource: FamilyTreesModel,
      options: {
        parent: {
          name: "Users",
        },
        listProperties: ["createdAt", "userId", "first_name", "relationship"],
      },
    },

    {
      resource: GroupModel,
      options: {
        parent: {
          name: "Group Chats",
        },
      },
    },

    {
      resource: GroupChatsModel,
      options: {
        parent: {
          name: "Group Chats",
        },
      },
    },

    {
      resource: SponsorModel,
      options: {
        parent: {
          name: "Others",
          icon: "Box",
        },
        listProperties: ["createdAt", "logo", "title", "status"],
        properties: {
          logo: {
            components: {
              edit: COMPONENTS.UploadImage,
              show: COMPONENTS.ShowImage,
              list: COMPONENTS.ShowImage,
            },
            custom: {
              styles: {
                show: {
                  height: 100,
                  width: 100,
                  borderRadius: "8px",
                },
                list: {
                  height: 40,
                  width: 40,
                  borderRadius: "50%",
                },
              },
            },
          },
        },
      },
    },
    {
      resource: BlogModel,
      options: {
        parent: {
          name: "Others",
        },
        listProperties: ["createdAt", "image", "title", "trending", "status"],
        properties: {
          image: {
            components: {
              edit: COMPONENTS.UploadImage,
              show: COMPONENTS.ShowImage,
              list: COMPONENTS.ShowImage,
            },
            custom: {
              styles: {
                show: {
                  height: 200,
                  width: 200,
                  borderRadius: "8px",
                },
                list: {
                  height: 40,
                  width: 40,
                  borderRadius: "5px",
                },
              },
            },
          },
        },
      },
    },
    {
      resource: CountryModel,
      options: {
        parent: {
          name: "Countries",
          icon: "Map",
        },
        listProperties: ["name", "status"],
      },
    },
    {
      resource: NewsletterModel,
      options: {
        parent: {
          name: "Others",
        },
        listProperties: ["createdAt", "email"],
      },
    },
    {
      resource: ContactUsModel,
      options: {
        parent: {
          name: "Others",
        },
        listProperties: [
          "createdAt",
          "first_name",
          "last_name",
          "email",
          "status",
        ],
      },
    },

    {
      resource: AboutUsModel,
      options: {
        parent: {
          name: "Pages",
          icon: "Edit",
        },
        properties: {
          corporate: {
            type: "richtext",
          },
          vision: {
            type: "richtext",
          },
          mission: {
            type: "richtext",
          },
          objectives: {
            type: "richtext",
          },
          content: {
            type: "richtext",
          },
        },
        // listProperties : ['createdAt','title','content']
      },
    },

    {
      resource: WhyAfrikatribePageModel,
      options: {
        parent: {
          name: "Pages",
        },
        properties: {
          content: {
            type: "richtext",
          },
        },
      },
    },

    {
      resource: PricingOptionPageModel,
      options: {
        parent: {
          name: "Pages",
        },
        properties: {
          content: {
            type: "richtext",
          },
        },
      },
    },

    {
      resource: PrivacyPolicyPageModel,
      options: {
        parent: {
          name: "Pages",
        },
        properties: {
          content: {
            type: "richtext",
          },
        },
      },
    },

    {
      resource: TermsAndConditionPageModel,
      options: {
        parent: {
          name: "Pages",
        },
        properties: {
          content: {
            type: "richtext",
          },
        },
      },
    },

    {
      resource: DisclaimerPageModel,
      options: {
        parent: {
          name: "Pages",
        },
        properties: {
          content: {
            type: "richtext",
          },
        },
      },
    },

    {
      resource: ContactUsPageModel,
      options: {
        parent: {
          name: "Pages",
        },
        properties: {
          content: {
            type: "richtext",
          },
        },
      },
    },

    {
      resource: BannerModel,
      options: {
        parent: {
          name: "Pages",
        },
        properties: {
          banner: {
            components: {
              edit: COMPONENTS.UploadImage,
              show: COMPONENTS.ShowImage,
              list: COMPONENTS.ShowImage,
            },
            custom: {
              styles: {
                show: {
                  height: 300,
                  width: 300,
                  borderRadius: "8px",
                },
                list: {
                  height: 60,
                  width: 60,
                  borderRadius: "5px",
                },
              },
            },
          },
        },
      },
    },

    {
      resource: FAQModel,
      options: {
        parent: {
          name: "Pages",
        },
        properties: {
          question: {
            position: 1,
          },
          answer: {
            position: 2,
          },
        },
      },
    },
  ],
  dashboard: {
    component: COMPONENTS.Dashboard,
    handler: dashboardHandler,
  },

  rootPath: "/master",
  loginPath: "/master/login",
  logoutPath: "/master/logout",
  assets: {
    styles: [`${BASE_URL}/assets/sidebar.css`],
  },
});

// adminJs.watch();

const ADMIN = {
  email: "admin@africatribes.com",
  password: "fricatribes@Master0011",
};

// Create auth provider
const provider = new DefaultAuthProvider({
  componentLoader,
  authenticate: async ({ email, password }) => {
    if (email === ADMIN.email && password === ADMIN.password) {
      return { email }; // or return more user details if needed
    }

    return null;
  },
});

// Initialize AdminJS (required if using custom components)
if (process.env.MODE === "production") {
  await adminJs.initialize();
} else {
  adminJs.watch();
}

// Build authenticated router with the provider
const adminRouter = buildAuthenticatedRouter(
  adminJs,
  {
    provider,
    cookiePassword: process.env.COOKIE_SECRET,
    cookieName: "adminJs",
  },
  null,
  {
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: true,
  }
);

// const router = AdminJSExpress.buildAuthenticatedRouter(adminJs, {
//   authenticate: async (email, password) => {
//     console.log("here...", email, password);
// if (email === ADMIN.email && password === ADMIN.password) {
//   return {
//     email: "nodestructure@gmail.com",
//     name: "Admin",
//   };
// }
// return false;
//   },
//   cookiePassword: "s!@#$%^&*()_+e!@#$%^&*()_+c!@#$%^&*()_+u!@#$%^&*()_+r!@#$%^&*()_+e",
// });

// Placeholder authentication function, add your logic for authenticating users
// const authenticate = ({ email, password }, ctx) => {
//   if (email === ADMIN.email && password === ADMIN.password) {
//     return {
//       email: "nodestructure@gmail.com",
//       name: "Admin",
//     };
//   }
//   return false;
// };

// const authProvider = new DefaultAuthProvider({
//   componentLoader,
//   authenticate,
// });

// const router = AdminJSExpress.buildAuthenticatedRouter(
//   adminJs,
//   {
//     // "authenticate" was here
//     cookiePassword: "test",
//     provider: authProvider,
//   },
//   null,
//   {
//     secret: "test",
//     resave: false,
//     saveUninitialized: true,
//   }
// );

const adminRouterX = AdminJSExpress.buildRouter(adminJs);

export default adminRouterX;
