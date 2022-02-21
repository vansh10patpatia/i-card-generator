console.log("Hello Student Developer");

// ------------------------All files ---------------------------------

const express = require("express");
const loginRoute = require("./Express Routers/Auth");
// const createCourse = require("./Express Routers/Course Apis/Course");
// const createSubject = require("./Express Routers/Subject Apis/Subject");
// const createBoard = require("./Express Routers/Board Apis/Board");
// const createClasses = require("./Express Routers/Classes Apis/Classes");
// const createTopic = require("./Express Routers/Topic Apis/Topic");
// const createResource = require("./Express Routers/Resource Apis/Resource");
// const createEarning = require("./Express Routers/Earning Apis/Earning");
// const createCMS = require("./Express Routers/CMS Apis/CMS");
// const createFaq = require("./Express Routers/Faq Apis/Faq");

const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
const YAML = require("yamljs");

const swaggerUI = require("swagger-ui-express");

// const swaggerJsDocs = YAML.load("./api.yaml");

// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');

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
// app.use("/v1/course", createCourse);
// app.use("/v1/subject", createSubject);
// app.use("/v1/board", createBoard);
// app.use("/v1/Classes", createClasses);
// app.use("/v1/topic", createTopic);
// app.use("/v1/resource", createResource);
// app.use("/v1/earning", createEarning);
// app.use("/v1/cms", createCMS);
// app.use("/v1/faq", createFaq);

app.listen(port, () => {
	console.log(`Server up and running on port ${port}`);
});

// -------------------------------Closing the server----------------------------------------
