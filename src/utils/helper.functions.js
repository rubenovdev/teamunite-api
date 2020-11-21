import jwt from 'jsonwebtoken'
import config from '../config/config.js'

export const sendMessage = (res, status, message, error) => {
  if (error) console.error(error.message)
  return res.status(status).json({ message })
}

export const createJWT = async id => {
  const options = {
    expiresIn: '15d'
  }
  const accessToken = await jwt.sign(
    { id },
    config.ACCESS_TOKEN_SECRET,
    options
  )
  return accessToken
}
