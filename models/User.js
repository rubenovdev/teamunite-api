const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  status: String
});

const User = mongoose.model("User", userSchema, "users");

module.exports = User;
