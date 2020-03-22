const express = require("express");
const projectsController = require("../controllers/projectsController");

const router = express.Router();

router
  .route("/api/v1/projects")
  .get(projectsController.getAllProjects)
  .post(projectsController.addProject);

module.exports = router;
