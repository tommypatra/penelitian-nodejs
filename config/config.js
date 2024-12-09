// config.js
require('dotenv').config(); 

const config = {
  // Database Configuration
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
  },

  // JWT Configuration
  jwt: {
    secret: process.env.JWT_SECRET,
    expiration: process.env.JWT_EXPIRATION,
  },

  // Application Configuration
  app: {
    name: process.env.APP_NAME,
    port: process.env.PORT,
    environment: process.env.NODE_ENV,
    limit:process.env.LIMIT_DATA,
  },
};

module.exports = config;