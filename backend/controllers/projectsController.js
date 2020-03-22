const Project = require("../models/projectsModel");

exports.getAllProjects = async (req, res) => {
  const projects = await Project.find();
  res.status(200).json({
    status: "success",
    results: projects.length,
    data: projects
  });
};

exports.addProject = async (req, res) => {
  try {
    await Project.create(req.body, err => {
      res.status(400).json({
        status: "error",
        message: err
      });
    });
    res.status(201).json({
      status: "success",
      message: "I work",
      data: {
        project: req.body
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err
    });
  }
};
