const express = require("express");
const questionsController = require("../controllers/questionsController");

const router = express.Router();
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));
router
  .route("/")
  // .get(questionsController.getAllCompanies)
  .post(questionsController.addQuestion);

module.exports = router;
