const { Schema, model } = require('mongoose')

const schema = new Schema({
	name: String,
	surname: String,
	status: String,
})

module.exports = model('User', schema)
