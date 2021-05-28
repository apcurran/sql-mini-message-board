"use strict";

const db = require("../db/index");
const { formatDate } = require("../utility/format-date");

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
        const messagesWithFormattedDates = messages.map(message => {
            return {
                ...message,
                created_at: formatDate(message.created_at)
            };
        });

        res.render("message/index", { title: "Category page", topic: category, comments: messagesWithFormattedDates });

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