"use strict";

const express = require("express");
const router = express.Router();

const messageController = require("../controllers/message-controller");

// GET routes
router.get("/", messageController.getIndex);

router.get("/gaming", messageController.getGaming);

router.get("/sports", messageController.getSports);

router.get("/fashion", messageController.getFashion);

// POST routes
router.post("/new-message", messageController.postNewMessage);

module.exports = router;