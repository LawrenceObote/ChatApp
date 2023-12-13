var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

const userRoutes = require("./user");
router.use("/user", userRoutes);

module.exports = router;
