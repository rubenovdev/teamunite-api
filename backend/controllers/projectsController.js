const Project = require("../models/projectsModel");

exports.getAllProjects = (req, res) => {
  res.status(200).json({
    status: "success",
    results: "Im length",
    data: "Im data"
  });
};

exports.addProject = (req, res) => {
  const project = new Project({ ...req.body });
  project
    .save(err => {
      console.log(err);
    })
    .then(doc => console.log(doc))
    .catch(err => console.log(err));

  res.status(200).json({
    status: "success",
    data: {
      project: { ...req.body }
    }
  });
};
