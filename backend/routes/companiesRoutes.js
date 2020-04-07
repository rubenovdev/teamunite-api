const express = require("express");
const companiesController = require("../controllers/companiesController");

const router = express.Router();

router
  .route("/")
  .get(companiesController.getAllCompanies)
  .post(companiesController.addCompany);

router.route("/:id").get(companiesController.getCompanyById);

module.exports = router;
