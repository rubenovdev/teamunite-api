const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  users: String,
  status: String,
  createdAt: { type: Number, default: +new Date() }
});

const Project = mongoose.model("Project", projectSchema, "projects");

module.exports = Project;
