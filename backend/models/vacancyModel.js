const mongoose = require("mongoose");

const vacancySchema = new mongoose.Schema({
  name: String,
  description: String,
  quantity: Number
});

const Vacancy = mongoose.model("Vacancy", vacancySchema, "vacancies");

module.exports = Vacancy;
