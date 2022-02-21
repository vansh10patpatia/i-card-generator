
const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
// var cors = require("cors");
// const YAML = require("yamljs");


const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT;
const db = process.env.DB;

const routes = require('./routes/index')

mongoose.connect(db, () => {
	console.log("Database is connected Successfully");
});


const app = express();
// app.use(express.static("public"));

// app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());


app.use('/v1', routes);

app.listen(port, () => {
	console.log(`Server up and running on port ${port}`);
});
