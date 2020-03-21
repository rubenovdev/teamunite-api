const express = require("express");
const fs = require("fs");

const projects = JSON.parse(fs.readFileSync(`${__dirname}/projects.json`));
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

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    results: projects.length,
    data: {
      projects
    }
  });
});

module.exports = app;
