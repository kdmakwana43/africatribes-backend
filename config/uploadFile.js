// import multer from "multer";
// import {path,} from "path";
// import { fileURLToPath } from "url";

import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const APP_PATH = path.join(__dirname, "..");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(APP_PATH + "/public/images"));
  },
  filename: function (req, file, cb) {
    var ext = file.originalname.split(".").pop();
    const uniqueSuffix =
      Date.now() + "-" + Math.round(Math.random() * 1e9) + "." + ext;
    cb(null, file.fieldname + "-" + uniqueSuffix);
  },
});

const upload = multer({ storage: storage });
export default upload;
