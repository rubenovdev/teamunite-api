const Question = require("../models/questionModel");
var express = require("express");

// exports.getAllCompanies = async (req, res) => {
//   const companies = await Company.find().populate("projects");

//   res.status(200).json({
//     status: "success",
//     results: companies.length,
//     data: companies
//   });
// };

const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.use(function(req, res) {
  res.setHeader("Content-Type", "text/plain");
  res.write("you posted:\n");
  res.end(JSON.stringify(req.body, null, 2));
});
exports.addQuestion = async (req, res) => {
  try {
    // await Question.create(req.body);
    console.log(req.body);
    res.status(200).json({
      status: "success",
      message: "I work",
      data: {
        project: req.body
      }
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err
    });
  }
};
