const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
	name: String,
	sphereOfActivity: String,
	description: String,
	logo: String,
	isAvailableInternship: Boolean,
	projects: [{ type: Types.ObjectId, ref: 'Project' }],
})

module.exports = model('Company', schema)
