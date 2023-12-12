const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
const { createRoom, createUser } = require("./controller");
const user = require("./models/user");

dotenv.config();
const app = express();
const httpServer = createServer(app);
const db = require("./database");
const sequelize = new Sequelize(process.env.DATABASE_URL, {
  define: {
    freezeTableName: true,
  },
});

const initDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await user.sync({ alter: true });
    await sequelize.sync({ alter: true });
    console.log("All models were synchronized successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const io = new Server(httpServer, {
  /* options */
});
// httpServer.use("/create_user", createUser);
// app.post("/create_room", createRoom);
app.post("/create_user", createUser);

io.on("connection", (socket) => {});

io.on("new_namespace", (namespace) => {
  // ...
});
initDatabase();
httpServer.listen(3000);
