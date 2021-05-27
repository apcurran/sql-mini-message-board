"use strict";

const db = require("../db/index");
const { formatDate } = require("../utility/format-date");

// GET controllers
// TODO: Consolidate with route param for various pages and extract into var passed into render func
async function getIndex(req, res, next) {
    try {
        const messages = (await db.query(`
            SELECT
                username,
                content,
                created_at
            FROM user_message
        `
        )).rows;
        const messagesWithFormattedDates = messages.map(message => {
            return {
                ...message,
                created_at: formatDate(message.created_at)
            };
        });

        res.render("message/index", { title: "SQL Messages Home", topic: "general", comments: messagesWithFormattedDates });

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
        const { name, comment } = req.body;
        const { topic } = req.query;
        const now = new Date();

        // INSERT INTO db
        await db.query(`
            INSERT INTO user_message
                (username, content, topic, created_at)
            VALUES
                ($1, $2, $3, $4)
            `,
            [name, comment, topic, now]
        );

        // Redirect after saving to db
        if (topic === "general") {
            return res.redirect("/");
        }

        res.redirect(`/${topic}`);

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