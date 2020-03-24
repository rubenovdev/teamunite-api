const Project = require("../models/projectsModel");
const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  name: String,
  description: String,
  sphereOfActivity: String,
  logo: String,
  isAvailableInternship: Boolean,
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: Project }]
});

const Company = mongoose.model("Company", companySchema, "companies");

module.exports = Company;
