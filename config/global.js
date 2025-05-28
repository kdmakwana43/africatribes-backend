import JWT from "jsonwebtoken";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const APP_PATH = path.join(__dirname, "..");
const BASE_URL = "http://localhost:8080";

export { JWT, fs, path, __dirname, APP_PATH, BASE_URL };