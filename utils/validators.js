// Dependencies
const { body } = require('express-validator')

// Models
const Company = require('../models/Company')

exports.companyValidators = [
	body('name', 'Укажите название компании')
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
	body('description', 'Укажите описание компании').exists().notEmpty(),
	body('activity', 'Укажите сферу деятельности компании').exists().notEmpty(),
	body('internship', 'Укажите доступность стажировок в компании')
		.exists()
		.notEmpty()
		.isBoolean(),
]

exports.projectValidators = [
	body('name', 'Укажите название проекта').exists().notEmpty(),
	body('description', 'Укажите описание проекта').exists().notEmpty(),
	body('faculty', 'Укажите факультет проекта').exists().notEmpty(),
	body('curators', 'Укажите куратора проекта').exists().notEmpty().isArray(),
]

exports.announcementsValidators = [
	body('title', 'Укажите заголовок объявления').exists().notEmpty(),
	body('description', 'Укажите описание объявления').exists().notEmpty(),
	body('author', 'Укажите автора объявления').exists().notEmpty().isMongoId(),
]
