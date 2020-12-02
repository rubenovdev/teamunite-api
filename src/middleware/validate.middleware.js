import validator from 'express-validator'
import { sendMessage } from '../utils/responses.js'

const { validationResult } = validator

export const isValid = (req, res, next) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return sendMessage(res, 400, errors.array()[0].msg)
  }
  return next()
}
