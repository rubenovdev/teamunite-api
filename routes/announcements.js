// Dependencies
const { Router } = require('express')

// Variables
const router = Router()

// Models
const Announcement = require('../models/Announcement')

// GET /v1/announcements
router.get('/', async (req, res) => {
	try {
		const announcements = await Announcement.find()
		return res.status(200).json(announcements)
	} catch (e) {
		console.log(e)
		return res
			.status(500)
			.json({ message: 'Что-то пошло не так, попробуйте позже' })
	}
})

// GET /v1/announcements/:id
router.get('/:id', async (req, res) => {
	try {
		const announcement = await Announcement.findById(req.params.id)
		if (announcement) {
			return res.status(200).json(announcement)
		} else {
			return res.status(404).json({ message: 'Объявление не найдено' })
		}
	} catch (e) {
		console.log(e)
		return res
			.status(500)
			.json({ message: 'Что-то пошло не так, попробуйте позже' })
	}
})

module.exports = router
