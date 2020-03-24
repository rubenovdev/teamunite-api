const Project = require("../models/projectsModel");

exports.getAllProjects = async (req, res) => {
  const projects = await Project.find()
    .populate({
      path: "company",
      populate: { path: "projects" }
    })
    .populate("curators")
    .populate("vacancies");

  res.status(200).json({
    status: "success",
    results: projects.length,
    data: projects
  });
};

exports.getProjectsByStatus = async (req, res) => {
  const projectsByStatus = await Project.find({ status: "active" });

  res.status(200).json({
    status: "success",
    results: projectsByStatus.length,
    data: projectsByStatus
  });
};

exports.addProject = async (req, res) => {
  try {
    await Project.create(req.body);
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
