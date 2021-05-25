"use strict";

const express = require("express");
const router = express.Router();

const messageController = require("../controllers/message-controller");

router.get("/", messageController.getIndex);

router.get("/new-message", messageController.getNewMessage);

module.exports = router;