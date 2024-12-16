const express = require("express");
const externalController = require("../controller/externalController");

const router = express.Router();

router.get("/weatherstack", externalController.getWeatherData);

module.exports = router;
