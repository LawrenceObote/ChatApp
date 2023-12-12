const sequelize = require("../database");
const { DataTypes } = require("sequelize");
const user = sequelize.define("user", {
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
  },
});

module.exports = user;
