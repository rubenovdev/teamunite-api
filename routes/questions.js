const { Router } = require('express')

const router = Router()

router.post('/', async (req, res) => {
	try {
		const answersArr = req.body
		const answersObj = {}

		answersArr.forEach((answer, index) => {
			answersObj[`question${index + 1}`] = answer
		})

		await Question.create(answersObj)

		res.status(200).json({
			status: 'success',
			data: {
				answersArr,
			},
		})
	} catch (e) {
		console.log(e)
	}
})

module.exports = router
