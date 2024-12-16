const express = require("express");
const externalController = require("../public/controllers/externalController");

const router = express.Router();

router.get("/:city", externalController.weatherstack);

module.exports = router;
