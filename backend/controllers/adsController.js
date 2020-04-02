const Ads = require("../models/adsModel");

exports.getAllAds = async (req, res) => {
  const id = req.query.id;
  const ads = id ? await Ads.find({ _id: id }) : await Ads.find();

  res.status(200).json({
    status: "success",
    results: ads.length,
    data: ads
  });
};
