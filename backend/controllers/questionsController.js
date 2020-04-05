const Question = require("../models/questionModel");

exports.addQuestion = async (req, res) => {
  try {
    const answersArr = req.body;
    const answersObj = {};

    answersArr.forEach((answer, index) => {
      answersObj[`question${index + 1}`] = answer;
    });

    await Question.create(answersObj);

    res.status(200).json({
      status: "success",
      data: {
        answersArr,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "error",
      message: err,
    });
  }
};
