const Ads = require("../models/adsModel");

exports.getAllAds = async (req, res) => {
  const ads = await Ads.find();

  res.status(200).json({
    status: "success",
    results: ads.length,
    data: ads,
  });
};
exports.getAdsById = async (req, res) => {
  try {
    const id = req.params.id;
    const ads = await Ads.find({ _id: id });

    res.status(200).json({
      status: "success",
      results: ads.length,
      data: ads,
    });
  } catch {
    res.status(200).json({
      status: "success",
      data: "not found",
    });
  }
};
