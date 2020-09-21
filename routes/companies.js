const { Router } = require('express')

const router = Router()

router.get('/', async (req, res) => {
	try {
		const companies = await Company.find()
		res.status(200).json({
			status: 'success',
			results: companies.length,
			data: companies,
		})
	} catch (e) {
		console.log(e)
	}
})

router.get('/:id', async (req, res) => {
	try {
		const id = req.params.id
		const companies = await Company.find({ _id: id })

		res.status(200).json({
			status: 'success',
			results: companies.length,
			data: companies,
		})
	} catch (e) {
		console.log(e)
	}
})

router.post('/', async (req, res) => {
	try {
		await Company.create(req.body)
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
