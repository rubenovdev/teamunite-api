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
	activity: {
		type: String,
		required: true,
	},
	logo: {
		type: String,
		required: true,
	},
	internship: {
		type: Boolean,
		required: true,
	},
	projects: {
		type: [Types.ObjectId],
		ref: 'Project',
		default: undefined,
	},
})

module.exports = model('Company', schema)
