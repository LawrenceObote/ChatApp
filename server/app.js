const express = require("express");
const { Server } = require("socket.io");
const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
const { user } = require("./models/index");
const port = process.env.PORT || 3000;
const router = require("./routes/index");

dotenv.config();
const app = express();
const httpServer = require("http").createServer(app);
const sequelize = require("./database");

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
initDatabase();
// const io = new Server(httpServer, {
//   /* options */
// });

app.use("/", router);

// io.on("connection", (socket) => {});

// io.on("new_namespace", (namespace) => {
//   // ...
// });

httpServer.listen(port, () => {
  console.log(`server listening on port:${port}`);
});
