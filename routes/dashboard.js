var express = require("express");
var router = express.Router();
const dashboard_controller = require("../controller/dashboard_controller.js");

/* GET users listing. */
router.get("/", dashboard_controller.test);

module.exports = router;
