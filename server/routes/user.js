var express = require("express");
var userRouter = express.Router();
const { createUser } = require("../controller");

userRouter.get("/", (req, res) => {
  res.status(200).send("Working");
});

userRouter.post("/create", createUser);

module.exports = userRouter;
