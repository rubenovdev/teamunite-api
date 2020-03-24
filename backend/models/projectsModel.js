const Company = require("../models/companyModel");
const Vacancy = require("../models/vacancyModel");
const Curator = require("../models/userModel");
const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  faculty: String,
  company: { type: mongoose.Schema.Types.ObjectId, ref: Company },
  vacancies: [{ type: mongoose.Schema.Types.ObjectId, ref: Vacancy }],
  curators: [{ type: mongoose.Schema.Types.ObjectId, ref: Curator }],
  status: { type: String, default: "review" },
  createdAt: { type: Number, default: +new Date() }
});

const Project = mongoose.model("Project", projectSchema, "projects");

module.exports = Project;
