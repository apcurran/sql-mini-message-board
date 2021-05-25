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


module.exports = {
    getIndex,
};