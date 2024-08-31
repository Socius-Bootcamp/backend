const Sequelize = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool,
});

// Test the connection
// sequelize
//   .authenticate()
//   .then(() => {
//     console.log('Connection to MySQL has been established successfully.');
//   })
//   .catch((err) => {
//     console.error('Unable to connect to the database:', err);
//   });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// You can define models here and import them
// db.User = require('./user.model.js')(sequelize, Sequelize); // Example model import

module.exports = db;
