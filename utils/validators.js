// Dependencies
const { body } = require('express-validator')

// Models
const Company = require('../models/Company')

exports.companyValidators = [
	body('name', 'Укажите название')
		.exists()
		.notEmpty()
		.custom(async value => {
			try {
				const candidate = await Company.findOne({ name: value })
				if (candidate) return Promise.reject('Данная компания уже существует')
			} catch (e) {
				return Promise.reject('Неизвестная ошибка')
			}
		}),
	body('description', 'Укажите описание').exists().notEmpty(),
	body('activity', 'Укажите сферу деятельности').exists().notEmpty(),
	body('internship', 'Укажите доступность стажировок')
		.exists()
		.notEmpty()
		.isBoolean(),
]
