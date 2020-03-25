const express = require("express");
const projectsController = require("../controllers/projectsController");

const router = express.Router();

router
  .route("/")
  .get(projectsController.getAllProjects)
  .post(projectsController.addProject);

router.route("/active").get(projectsController.getProjectsByStatus);

module.exports = router;
