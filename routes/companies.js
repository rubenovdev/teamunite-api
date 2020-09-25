// Dependencies
const { Router } = require('express')

// Variables
const router = Router()

// Models
const Company = require('../models/Company')

// GET /v1/companies
router.get('/', async (req, res) => {
	try {
		const companies = await Company.find()
		res.status(200).json(companies)
	} catch (e) {
		console.log(e)
		return res
			.status(500)
			.json({ message: 'Что-то пошло не так, попробуйте позже' })
	}
})

// GET /v1/companies/:id
router.get('/:id', async (req, res) => {
	try {
		const company = await Company.findById(req.params.id)
		if (company) {
			return res.status(200).json(company)
		} else {
			return res.status(404).json({ message: 'Компания не найдена' })
		}
	} catch (e) {
		console.log(e)
		return res
			.status(500)
			.json({ message: 'Что-то пошло не так, попробуйте позже' })
	}
})

// POST /v1/companies
router.post('/', async (req, res) => {
	try {
		const company = await Company.create(req.body)
		return res.status(201).json(company)
	} catch (e) {
		console.log(e)
		return res
			.status(500)
			.json({ message: 'Что-то пошло не так, попробуйте позже' })
	}
})

module.exports = router
