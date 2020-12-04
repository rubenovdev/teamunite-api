import jwt from 'jsonwebtoken'
import express from 'express'

import { sendMessage } from '../utils/responses.js'
import { loginValid } from '../validators/auth.validator.js'
import { User } from '../models/User.js'
import { config } from '../config/config.js'
import { isValid } from '../middleware/validate.middleware.js'

const router = express.Router()

const createJWT = id => {
  const options = { expiresIn: '15d' }
  return jwt.sign({ id }, config.ACCESS_TOKEN_SECRET, options)
}

router.post('/login', loginValid, isValid, async (req, res) => {
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

export const authRoutes = router
