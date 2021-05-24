"use strict";

require("dotenv").config();

// Imports
const express = require("express");
const PORT = process.env.PORT || 5000;
const morgan = require("morgan");

const app = express();

if (process.env.NODE_ENV === "production") {
    app.use(morgan("dev"));
}

// Set template Engine
app.set("view engine", "ejs");
// Middleware
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server listening on port, ${PORT}.`));