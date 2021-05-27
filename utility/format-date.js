"use strict";

function formatDate(date) {
    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric"
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
}

module.exports = { formatDate };