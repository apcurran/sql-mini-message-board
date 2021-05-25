"use strict";

const express = require("express");
const router = express.Router();

const messageController = require("../controllers/message-controller");

router.get("/", messageController.getIndex);

module.exports = router;