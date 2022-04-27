"use strict";

function formatDate(date) {
    return new Intl.DateTimeFormat("en-US", { dateStyle: "full", timeStyle: "short" }).format(date);
}

function formatMessageDates(messages) {
    return messages.map(message => {
        return {
            ...message,
            created_at: formatDate(message.created_at)
        };
    });
}

module.exports = {
    formatMessageDates
};