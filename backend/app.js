const express = require("express");
const projectsRouter = require("./routes/projectsRoutes");
const companiesRouter = require("./routes/companiesRoutes");
const questionsRouter = require("./routes/questionsRoutes");
const adsRouter = require("./routes/adsRoutes");

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/v1/projects", projectsRouter); //get all projects
app.use("/api/v1/companies", companiesRouter); //get all companies
app.use("/api/v1/questions", questionsRouter); //get answers to the information collection form
app.use("/api/v1/ads", adsRouter); //get all ads or one ads by id

module.exports = app;
