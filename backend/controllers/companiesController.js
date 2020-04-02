const Company = require("../models/companyModel");

exports.getAllCompanies = async (req, res) => {
  const id = req.query.id;
  const companies = id
    ? await Company.find({ _id: id }).populate("projects")
    : await Company.find().populate("projects"); //.populate("projects")

  res.status(200).json({
    status: "success",
    results: companies.length,
    data: companies
  });
};

exports.addCompany = async (req, res) => {
  try {
    await Company.create(req.body);
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
