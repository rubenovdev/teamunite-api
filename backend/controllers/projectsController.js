const Project = require("../models/projectsModel");

exports.getAllProjects = (req, res) => {
  // const projects = Project.find();
  res.status(200).json({
    status: "success",
    results: "projects.length",
    data: "projects"
  });
};

exports.addProject = (req, res) => {
  const project = Project.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      project: { ...req.body }
    }
  });
};
