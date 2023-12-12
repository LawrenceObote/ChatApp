const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  define: {
    freezeTableName: true,
  },
});

// const initDatabase = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// initDatabase();

module.exports = sequelize;
