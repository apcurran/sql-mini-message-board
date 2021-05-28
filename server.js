"use strict";

require("dotenv").config();

// Imports
const express = require("express");
const PORT = process.env.PORT || 5000;
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const compression = require("compression");
const helmet = require("helmet");
// Routes
const messageRouter = require("./routes/message-router");

const app = express();

// Dev logging
if (process.env.NODE_ENV !== "production") {
    app.use(morgan("dev"));
}

app.use(helmet());
// Set template Engine
app.set("view engine", "ejs");
app.use(expressLayouts);
// Middleware
app.use(compression());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
// Enable routers
app.use("/", messageRouter);

// General server error handling
app.use((err, req, res, next) => {
    console.error(err);

    return res.status(500).render("error/500", { title: "Server Error", error: err.message });
});

app.listen(PORT, () => console.log(`Server listening on port, ${PORT}.`));