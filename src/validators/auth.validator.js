import validator from 'express-validator'

const { body } = validator

export const isLoginValid = [
  body('email', 'Введите email')
    .exists()
    .trim()
    .notEmpty()
    .normalizeEmail()
    .isEmail(),
  body('password', 'Введите пароль').exists().trim().notEmpty()
]
