const { Schema, model } = require('mongoose')

const schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	surname: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
		enum: ['student', 'curator', 'admin'],
	},
})

module.exports = model('User', schema)
