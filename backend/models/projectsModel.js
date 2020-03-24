const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  faculty: String,
  company_id: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  vacancy_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: "Vacancy" }],
  curator_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: "Curator" }],
  status: { type: String, default: "review" },
  createdAt: { type: Number, default: +new Date() }
});

const Project = mongoose.model("Project", projectSchema, "projects");

module.exports = Project;
