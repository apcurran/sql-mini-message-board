"use strict";

// GET controllers
async function getIndex(req, res, next) {
    try {
        res.render("index", { title: "SQL Messages Home" });

    } catch (err) {
        next(err)
    }
}

// POST controllers


module.exports = {
    getIndex,
};