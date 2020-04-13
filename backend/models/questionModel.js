const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  question1: String,
  question2: String,
  question3: String,
  question4: String,
  question5: String,
  question6: String,
  question7: String,
  question8: String,
  question9: String,
  question10: String,
});

const Question = mongoose.model("Question", questionSchema, "questions");

module.exports = Question;
