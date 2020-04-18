const mongoose = require("mongoose");

const adsSchema = new mongoose.Schema({
  id: String,
  title: String,
  description: String,
  author: String,
  date: Date,
  isFavourite: Boolean,
});

const Ads = mongoose.model("Ads", adsSchema, "ads");

module.exports = Ads;
