const { Schema, model, Types } = require('mongoose')

const schema = new Schema({
	name: String,
	description: String,
	faculty: String,
	company: { type: Types.ObjectId, ref: 'Company' },
	vacancies: [{ type: Types.ObjectId, ref: 'Vacancy' }],
	curators: [{ type: Types.ObjectId, ref: 'Curator' }],
	status: { type: String, default: 'review' },
	createdAt: { type: Number, default: Date.now },
})

module.exports = model('Project', schema)
