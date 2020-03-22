const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "A project must have a name"]
  },
  description: {
    type: String,
    required: [true, "A project must have a description"]
  },
  users: String,
  status: String,
  createdAt: { type: Number, default: +new Date() }
});

const Project = mongoose.model("Project", projectSchema, "projects");

module.exports = Project;
