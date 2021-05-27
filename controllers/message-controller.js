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

// POST controllers
async function postNewMessage(req, res, next) {
    try {
        // INSERT INTO db

        // res.redirect("/");

    } catch (err) {
        next(err);
    }
}

module.exports = {
    getIndex,
    postNewMessage
};