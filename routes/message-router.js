"use strict";

const express = require("express");
const router = express.Router();

const messageController = require("../controllers/message-controller");

// GET routes
router.get("/", messageController.getIndex);

// POST routes
router.post("/new-message", messageController.postNewMessage);

module.exports = router;