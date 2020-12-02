import validator from 'express-validator'

const { body } = validator

export const loginValid = [
  body('email', 'Введите email').normalizeEmail().isEmail(),
  body('password', 'Введите пароль').exists()
]
