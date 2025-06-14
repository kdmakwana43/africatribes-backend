import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import process from 'process';
import sequelize from '../config/database.js';

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = (await import(`../config/config.json`, { assert: { type: 'json' } }))[env];
const db = {};

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(async file => {
    const model = (await import(path.join(__dirname, file))).default(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

for (const modelName of Object.keys(db)) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;