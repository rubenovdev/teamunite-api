const { Router } = require('express')

const router = Router()

router.get('/', async (req, res) => {
	try {
		const ads = await Ads.find()

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
		const ads = await Ads.find({ _id: id })

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
