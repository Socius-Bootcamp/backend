const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  dialect: 'mysql',
  pool: {
    max: 5, // Maximum number of connections
    min: 0, // Minimum number of connections
    acquire: 30000, // Max time (ms) that pool will try to get connection before throwing error
    idle: 10000, // Max time (ms) that a connection can be idle before being released
  },
};
