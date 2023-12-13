// module.exports = (sequelize, DataTypes) => {
//   const user = sequelize.define("user", {
//     uuid: {
//       allowNull: false,
//       primaryKey: true,
//       type: DataTypes.UUID,
//       defaultValue: DataTypes.UUIDV4,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     rooms: {
//       type: DataTypes.STRING(1234),
//     },
//   });
// };

const { user } = require("./models/index");
console.log(user);
const createUser = async (req, res) => {
  try {
    const newUser = await user.create({
      name: req.query.name,
      rooms: req.query.rooms,
    });
    return res.status(201).json({
      status: 201,
      message: "user created successfully!",
    });
    console.log("user created successfully", newUser.name);
  } catch (err) {
    console.log("creation unsuccessful", err);
    return err;
  }
};
const createRoom = async (req, res) => {};

module.exports = {
  createUser,
};
