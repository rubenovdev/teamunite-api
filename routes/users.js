const { Router } = require('express')

const router = Router()

const User = require('../models/User')

router.get('/', async (req, res) => {
	try {
		const users = await User.find()

		res.status(200).json({
			status: 'success',
			data: users,
		})
	} catch (e) {
		console.log(e)
	}
})
router.get('/:id', async (req, res) => {
	try {
		const user = await User.findById(req.params.id)

		res.status(200).json({
			status: 'success',
			data: user,
		})
	} catch (e) {
		console.log(e)
	}
})

module.exports = router
