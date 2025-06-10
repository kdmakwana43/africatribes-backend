import JWT from "jsonwebtoken";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";
import * as __ from "../config/common.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const APP_PATH = path.join(__dirname, "..");
const BASE_URL = process.env.BASE_URL;

export { JWT, fs, path, __dirname, APP_PATH, BASE_URL, __ };
