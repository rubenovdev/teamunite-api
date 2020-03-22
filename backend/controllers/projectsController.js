const Project = require("../models/projectsModel");

exports.getAllProjects = (req, res) => {
  // const projects = Project.find();
  res.status(200).json({
    status: "success",
    results: "projects.length",
    data: "projects"
  });
};

exports.addProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body, err => {
      res.status(400).json({
        status: "error",
        message: err
      });
    });
    res.status(201).json({
      status: "success",
      data: {
        project: newProject
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err
    });
  }
};
