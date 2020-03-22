const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  faculty: String,
  company: mongoose.Schema.Types.ObjectId,
  vacancies_ids: [mongoose.Schema.Types.ObjectId],
  curators_ids: [mongoose.Schema.Types.ObjectId],
  status: { type: String, default: "review" },
  createdAt: { type: Number, default: +new Date() }
});

const Project = mongoose.model("Project", projectSchema, "projects");

module.exports = Project;
