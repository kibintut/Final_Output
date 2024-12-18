const express = require("express");
const externalController = require("../controller/externalController");

const router = express.Router();

router.get("/dogs", externalController.getDogImage);
router.get("/cars", externalController.getCarData);
router.get("/jokes", externalController.getJokeData);
module.exports = router;
