const express = require("express");
const adsController = require("../controllers/adsController");

const router = express.Router();

router.route("/").get(adsController.getAllAds);
router.route("/:id").get(adsController.getAdsById);

module.exports = router;
