const sequelize = require("../database");
const { Sequelize, DataTypes } = require("sequelize");
const user = sequelize.define("users", {
  uuid: {
    allowNull: false,
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rooms: {
    type: DataTypes.STRING(1234),
    defaultValue: "no rooms",
  },
});

module.exports = user;
