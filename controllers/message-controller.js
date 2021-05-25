"use strict";

const db = require("../db/index");

// GET controllers
async function getIndex(req, res, next) {
    try {
        res.render("message/index", { title: "SQL Messages Home" });

    } catch (err) {
        next(err);
    }
}

async function getNewMessage(req, res, next) {
    try {
        res.render("message/new-message", { title: "Create a New Message" });

    } catch (err) {
        next(err);
    }
}

// POST controllers


module.exports = {
    getIndex,
    getNewMessage,
};