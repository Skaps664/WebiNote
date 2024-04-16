var express = require("express");
var router = express.Router();
const mainController = require("../controller/main_controller.js");

/* GET home page. */

router.get("/", mainController.homePage);

router.get("/about", mainController.about);

module.exports = router;
