const express = require("express");
const { submitResponse } = require("../controllers/responseController");
const router = express.Router();

router.post("/", submitResponse);

module.exports = router;
