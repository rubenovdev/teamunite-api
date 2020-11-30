import express from 'express'
import { sendMessage } from '../utils/helper.functions.js'
import { isAuth } from '../middleware/auth.middleware'

const router = express.Router()

router.get('/', isAuth, async (req, res) => {
  try {
    const tasks = await Task
  } catch (e) {
    return sendMessage(res, 500, 'Что-то пошло не так, попробуйте позже', e)
  }
})

export const tasksRoutes = router
