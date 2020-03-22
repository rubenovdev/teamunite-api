const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  users: String,
  status: { type: String, default: "review" },
  createdAt: { type: Number, default: +new Date() }
});

const Project = mongoose.model("Project", projectSchema, "projects");

module.exports = Project;
