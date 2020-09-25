// Dependencies
const { Router } = require('express')

// Variables
const router = Router()

// Models
const Project = require('../models/Project')

// GET /v1/projects
router.get('/', async (req, res) => {
	try {
		const projects = await Project.find()
			.populate('company')
			.populate('curators')
			.populate('vacancies')

		return res.status(200).json(projects)
	} catch (e) {
		console.log(e)
		return res
			.status(500)
			.json({ message: 'Что-то пошло не так, попробуйте позже' })
	}
})

// GET /v1/projects/active
router.get('/active', async (req, res) => {
	try {
		const projects = await Project.find({ status: 'active' })
			.populate('company')
			.populate('curators')
			.populate('vacancies')

		return res.status(200).json(projects)
	} catch (e) {
		console.log(e)
		return res
			.status(500)
			.json({ message: 'Что-то пошло не так, попробуйте позже' })
	}
})

// POST /v1/projects
router.post('/', async (req, res) => {
	try {
		const project = await Project.create(req.body)
		return res.status(201).json(project)
	} catch (e) {
		console.log(e)
		return res
			.status(500)
			.json({ message: 'Что-то пошло не так, попробуйте позже' })
	}
})

module.exports = router
