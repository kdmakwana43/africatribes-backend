// admin.js
import AdminJS from "adminjs";
import AdminJSExpress from "@adminjs/express";
import * as AdminJSMongoose from "@adminjs/sequelize";
import path from "path";

import { ComponentLoader, DefaultAuthProvider } from "adminjs";
import { hasPassword } from "../config/common.js";
import { APP_PATH, BASE_URL } from "../config/global.js";

import Users from "../models/UserModel.js";
import SponsorModel from "../models/SponsorModel.js";

AdminJS.registerAdapter(AdminJSMongoose);

console.log('APP_PATH',APP_PATH)

// Initialize component loader
const componentLoader = new ComponentLoader();
const COMPONENTS = {
  Dashboard: componentLoader.add("Dashboard", path.join(APP_PATH, "admin/Dashboard")),
  UploadImage: componentLoader.add("UploadImage", path.join(APP_PATH, "admin/ImageUploader")),
  ShowImage: componentLoader.add("ShowImage", path.join(APP_PATH, "admin/ShowImage")),
};

const dashboardHandler = async () => {
//   const userCount = await UserModel.countDocuments();
  return {
    "Total Users": 1,
  };
};

const userResourceOptions = {
  listProperties : ['createdAt','profile','first_name','last_name','email','gender'],
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
      },
      custom: {
        styles: {
          show: {
            height: 100,
            width: 100,
            borderRadius: '8px',
          },
          list: {
            height: 40,
            width: 40,
            borderRadius: '50%',
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
      resource : SponsorModel
    }
  ],
  dashboard: {
    component: COMPONENTS.Dashboard,
    handler: dashboardHandler,
  },
  rootPath: "/master",
  assets: {
    styles: [`${BASE_URL}/assets/sidebar.css`],
  },
});

adminJs.watch()

const ADMIN = {
  email: "admin@mail.com",
  password: "Admin@Pass123",
};

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

const adminRouter = AdminJSExpress.buildRouter(adminJs);

export default adminRouter;