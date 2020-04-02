const Question = require("../models/questionModel");
var express = require("express");

exports.addQuestion = async (req, res) => {
  try {
    await Question.create(req.body);
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