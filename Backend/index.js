console.log("Hello Student Developer");

// ------------------------All files ---------------------------------

const express = require("express");
const loginRoute = require("./Express Routers/Auth");

const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
const YAML = require("yamljs");


// -------------------end_here----------------------------------------------

//-------------------------Dotenv Manager --------------------
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT;
const db = process.env.DB;

// closing dotenev files

// ----------------------------connecting the Database ----------------------------------

mongoose.connect(db, () => {
	console.log("Database is connected Successfully");
});

// --------------------------closing ----------------------------------------------------------

// ------------------------------------------close------------------------------------------------

// ------------------------------Opening then express server --------------------------

const app = express();
app.use(express.static("public"));

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//Routes for the express server

// app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

app.use("/v1/auth", loginRoute);

app.listen(port, () => {
	console.log(`Server up and running on port ${port}`);
});

// -------------------------------Closing the server----------------------------------------
