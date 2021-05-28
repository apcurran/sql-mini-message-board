"use strict";

const db = require("../db/index");
const { formatMessageDates } = require("../utility/format-date");

// GET controllers
async function getIndex(req, res, next) {
    try {
        const messages = (await db.query(`
            SELECT
                username,
                content,
                created_at
            FROM user_message
            WHERE topic = 'general'
        `
        )).rows;
        const messagesWithFormattedDates = formatMessageDates(messages);

        res.render("message/index", { title: "SQL Board", topic: "general", comments: messagesWithFormattedDates });

    } catch (err) {
        next(err);
    }
}

async function getCategory(req, res, next) {
    try {
        const { category } = req.params;
        const messages = (await db.query(`
            SELECT
                username,
                content,
                created_at
            FROM user_message
            WHERE topic = $1
        `,  [category])).rows;
        const messagesWithFormattedDates = formatMessageDates(messages);

        res.render("message/index", { title: "SQL Board", topic: category, comments: messagesWithFormattedDates });

    } catch (err) {
        next(err);
    }
}

// // POST controllers
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
    getCategory,
    postNewMessage
};