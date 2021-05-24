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

// Middleware
app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(PORT, () => console.log(`Server listening on port, ${PORT}.`));