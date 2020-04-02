const express = require("express");
const adsController = require("../controllers/adsController");

const router = express.Router();

router.route("/").get(adsController.getAllAds);
// .post(adsController.addAds);

module.exports = router;
