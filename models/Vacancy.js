const { Schema, model } = require('mongoose')

const schema = new Schema({
	name: String,
	description: String,
	quantity: Number,
})

module.exports = model('Vacancy', schema)
