const express = require("express");
const externalController = require("../controllers/externalController");

const router = express.Router();

router.get("/", externalController.nationalize);

module.exports = router;
