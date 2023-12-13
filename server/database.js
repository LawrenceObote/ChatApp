const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  define: {
    freezeTableName: true,
  },
});

module.exports = sequelize;
