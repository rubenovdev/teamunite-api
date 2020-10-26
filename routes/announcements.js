// Dependencies
const {validationResult} = require('express-validator')
const {Router} = require('express')

// Variables
const router = new Router()

// Models
const Announcement = require('../models/Announcement')

// Validators
const {announcementsValidators} = require('../utils/validators')

// GET /v1/announcements
router.get('/', async (req, res) => {
  try {
    const announcements = await Announcement.find().populate('author')
    return res.status(200).json(announcements)
  } catch (e) {
    console.log(e)
    return res
        .status(500)
        .json({message: 'Что-то пошло не так, попробуйте позже'})
  }
})

// GET /v1/announcements/:id
router.get('/:id', async (req, res) => {
  try {
    const announcement = await Announcement.findById(req.params.id).populate(
        'author',
    )
    if (announcement) {
      return res.status(200).json(announcement)
    } else {
      return res.status(404).json({message: 'Объявление не найдено'})
    }
  } catch (e) {
    console.log(e)
    return res
        .status(500)
        .json({message: 'Что-то пошло не так, попробуйте позже'})
  }
})

router.post('/', announcementsValidators, async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({message: errors.array()[0].msg})
    }

    const {title, description, author} = req.body
    const announcement = new Announcement({
      title,
      description,
      author,
    })
    await announcement.save()
    return res.status(201).json(announcement)
  } catch (e) {
    console.log(e)
    return res
        .status(500)
        .json({message: 'Что-то пошло не так, попробуйте позже'})
  }
})

module.exports = router
