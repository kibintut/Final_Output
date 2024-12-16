const express = require("express");
const externalController = require("../controllers/externalController");

const router = express.Router();

router.get("/about.html", externalController.randomduck);

module.exports = router;
