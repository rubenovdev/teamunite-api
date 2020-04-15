const express = require("express");
const projectsRouter = require("./routes/projectsRoutes");
const companiesRouter = require("./routes/companiesRoutes");
const questionsRouter = require("./routes/questionsRoutes");
const adsRouter = require("./routes/adsRoutes");
const usersRouter = require("./routes/usersRoutes");

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

app.use("/api/v1/projects", projectsRouter);
app.use("/api/v1/companies", companiesRouter);
app.use("/api/v1/questions", questionsRouter);
app.use("/api/v1/announcements", adsRouter);
app.use("/api/v1/users", usersRouter);

module.exports = app;
