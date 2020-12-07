import express from 'express'
import { sendMessage } from '../utils/responses.js'
import { isAuth } from '../middleware/auth.middleware.js'
import { Task } from '../models/Task.js'
import { createValid } from '../validators/tasks.validator.js'
import { isValid } from '../middleware/validate.middleware.js'

const router = express.Router()

router.get('/', isAuth, async (req, res) => {
  try {
    const tasks = await Task.find({ curators: req.user.id })
    return res.status(200).json(tasks)
  } catch (e) {
    return sendMessage(res, 500, 'Что-то пошло не так, попробуйте позже', e)
  }
})

router.post('/', isAuth, createValid, isValid, async (req, res) => {
  try {
    const task = await Task.create({ ...req.body, owner: req.user.id })
    return res.status(200).json(task)
  } catch (e) {
    return sendMessage(res, 500, 'Что-то пошло не так, попробуйте позже', e)
  }
})

export const tasksRoutes = router
