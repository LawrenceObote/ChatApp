module.exports = (sequelize, DataTypes) => {
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
};

const createUser = async (req, res) => {
  const newUser = await user.create({
    name: req.query.name,
    rooms: "",
  });
};
const createRoom = async (req, res) => {};

module.exports = {
  createUser,
};
