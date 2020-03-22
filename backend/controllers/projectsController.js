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

  project
    .save(err => {
      console.log(err);
    })
    .then(doc => console.log(doc))
    .catch(err => console.log(err));

  res.status(201).json({
    status: "success",
    data: {
      project: { ...req.body }
    }
  });
};
