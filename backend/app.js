const express = require("express");
const projectsRouter = require("./routes/projectsRoutes");
const companiesRouter = require("./routes/companiesRoutes");

const app = express();

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

app.use("/api/v1/projects", projectsRouter);
app.use("/api/v1/companies", companiesRouter);

module.exports = app;
