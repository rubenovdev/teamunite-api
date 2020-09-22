const { Router } = require('express')

const router = Router()

const Project = require('../models/Project')

router.get('/', async (req, res) => {
	try {
		const projects = await Project.find()
			.populate('company')
			.populate('curators')
			.populate('vacancies')

		res.status(200).json({
			status: 'success',
			results: projects.length,
			data: projects,
		})
	} catch (e) {
		console.log(e)
	}
})
router.get('/active', async (req, res) => {
	try {
		const projectsByStatus = await Project.find({ status: 'active' })
			.populate('company')
			.populate('curators')
			.populate('vacancies')

		res.status(200).json({
			status: 'success',
			results: projectsByStatus.length,
			data: projectsByStatus,
		})
	} catch (e) {
		console.log(e)
	}
})
router.post('/', async (req, res) => {
	try {
		await Project.create(req.body)
		res.status(201).json({
			status: 'success',
			data: {
				project: req.body,
			},
		})
	} catch (e) {
		console.log(e)
	}
})

module.exports = router
