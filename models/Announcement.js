const { Schema, model } = require('mongoose')

const schema = new Schema({
	title: String,
	description: String,
	author: String,
	date: Date,
	isFavourite: Boolean,
})

module.exports = model('Announcement', schema)
