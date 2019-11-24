import fs from "fs";
import path from "path";

import continuationLocalStorage from "continuation-local-storage";
import Sequelize from "sequelize";

import config from "../config";

("use strict");

const db = {};

const { username, password, database, host, dialect } = config;
var sequelize = new Sequelize(database, username, password, { host, dialect });

fs.readdirSync(`${__dirname}/models`)
  .filter(
    file =>
      file.indexOf(".") !== 0 && file !== "index.js" && file.slice(-3) === ".js"
  )
  .forEach(file => {
    var model = sequelize.import(path.join(`${__dirname}/models`, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db['Post'].hasMany(db['Like'], { foreign_key: 'liked_foreign_key'})


db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.Sequelize.useCLS(continuationLocalStorage.createNamespace("transaction"));

export default db;
