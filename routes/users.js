// Dependencies
const {Router} = require('express')

// Variables
const router = new Router()

// Models
const User = require('../models/User')

// GET /v1/users
router.get('/', async (req, res) => {
  try {
    const users = await User.find()
    return res.status(200).json(users)
  } catch (e) {
    console.log(e)
    return res
        .status(500)
        .json({message: 'Что-то пошло не так, попробуйте позже'})
  }
})

// GET /v1/users/:id
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    if (user) {
      return res.status(200).json(user)
    } else {
      return res.status(400).json({message: 'Пользователь не найден'})
    }
  } catch (e) {
    console.log(e)
    return res
        .status(500)
        .json({message: 'Что-то пошло не так, попробуйте позже'})
  }
})

module.exports = router
