require("dotenv").config();


module.exports = {
  development: {
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: "rishabh@123",
    database: "blog_app",
    host: "localhost",
    dialect: "mysql",
  },
  production: {
    username: process.env.PROD_USER,
    password: process.env.PROD_PASSWORD,
    database: process.env.PROD_DATABASE,
    host: process.env.PROD_HOST,
    dialect: "mysql",
  },
};
