import express from 'express'
import { createJWT, sendMessage } from '../utils/helper.functions.js'
import { isLoginValid } from '../validators/auth.validator.js'
import validate from '../middleware/validate.middleware.js'
import { User } from '../models/User.js'

const router = express.Router()

router.post('/login', isLoginValid, validate, async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })
    if (!user) {
      return sendMessage(res, 400, 'Пользователь не найден')
    }
    if (user.password !== password) {
      return sendMessage(res, 400, 'Неверный пароль')
    }
    const accessToken = createJWT(user.id)
    return res.status(200).json({ accessToken })
  } catch (e) {
    return sendMessage(res, 500, 'Что-то пошло не так, попробуйте позже', e)
  }
})

export default router
