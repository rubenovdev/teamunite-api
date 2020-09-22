const { Router } = require('express')

const router = Router()

const Announcement = require('../models/Announcement')

router.get('/', async (req, res) => {
	try {
		const ads = await Announcement.find()

		res.status(200).json({
			status: 'success',
			results: ads.length,
			data: ads,
		})
	} catch (e) {
		console.log(e)
	}
})

router.get('/:id', async (req, res) => {
	try {
		const id = req.params.id
		const ads = await Announcement.find({ _id: id })

		res.status(200).json({
			status: 'success',
			results: ads.length,
			data: ads,
		})
	} catch (e) {
		console.log(e)
	}
})

module.exports = router
