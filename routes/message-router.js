"use strict";

const express = require("express");
const router = express.Router();

const messageController = require("../controllers/message-controller");

// GET routes
router.get("/", messageController.getIndex);

router.get("/new-message", messageController.getNewMessage);

// POST routes
router.post("/new-message", messageController.postNewMessage);

module.exports = router;