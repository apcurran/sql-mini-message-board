"use strict";

const db = require("../db/index");

// GET controllers
async function getIndex(req, res, next) {
    try {
        res.render("message/index", { title: "SQL Messages Home", topic: "general" });

    } catch (err) {
        next(err);
    }
}

async function getGaming(req, res, next) {
    try {
        res.render("message/index", { title: "SQL Messages Home", topic: "gaming" });

    } catch (err) {
        next(err);
    }
}

async function getSports(req, res, next) {
    try {
        res.render("message/index", { title: "SQL Messages Home", topic: "sports" });

    } catch (err) {
        next(err);
    }
}

async function getFashion(req, res, next) {
    try {
        res.render("message/index", { title: "SQL Messages Home", topic: "fashion" });

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
    getGaming,
    getSports,
    getFashion,
    postNewMessage
};