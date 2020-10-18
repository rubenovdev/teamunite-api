const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	quantity: {
		type: Number,
		required: true,
	},
	project: {
		type: Types.ObjectId,
		ref: 'Project',
		required: true,
	},
})

module.exports = model('Vacancy', schema)
