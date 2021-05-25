"use strict";

require("dotenv").config();

// Imports
const express = require("express");
const PORT = process.env.PORT || 5000;
const morgan = require("morgan");
// Routes
const messageRouter = require("./routes/message-router");

const app = express();

// Dev logging
if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
}

// Set template Engine
app.set("view engine", "ejs");
// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// Enable routers
app.use("/", messageRouter);

// General server error handling
app.use((err, req, res, next) => {
    console.error(err);

    // TODO: Render error page
    // return res.render()
});

app.listen(PORT, () => console.log(`Server listening on port, ${PORT}.`));