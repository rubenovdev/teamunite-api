import jwt from 'jsonwebtoken'
import { sendMessage } from '../utils/responses.js'
import { config } from '../config/config.js'
import { User } from '../models/User.js'

export const isAuth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    if (!token) {
      return sendMessage(res, 401, 'Нет авторизации')
    }

    const decoded = jwt.verify(token, config.ACCESS_TOKEN_SECRET)

    const user = await User.findById(decoded.id)
    if (!user) {
      return sendMessage(res, 401, 'Нет авторизации')
    }

    req.user = { ...decoded, role: user.role }
    return next()
  } catch (e) {
    return sendMessage(res, 401, 'Нет авторизации')
  }
}
