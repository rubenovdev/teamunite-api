const express = require("express");
const questionsController = require("../controllers/questionsController");

const router = express.Router();

router
  .route("/")
  // .get(questionsController.getAllCompanies)
  .post(questionsController.addQuestion);

module.exports = router;
