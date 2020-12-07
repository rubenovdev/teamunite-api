import validator from 'express-validator'

const { body } = validator

export const createValid = [
  body('title', 'Invalid title').exists().notEmpty().isString(),
  body('groups', 'Invalid groups').exists().isArray(),
  body('curators', 'Invalid curators').exists().isArray(),
  body('retake', 'Invalid retake').exists().isBoolean(),
  body('deadline', 'Invalid deadline').exists().toDate(),
  body('quantity', 'Invalid quantity').exists().isInt({ min: 1 }),
  body('options', 'Invalid options').exists().isInt({ min: 1 }),
  body('description', 'Invalid description').exists().notEmpty().isString(),
  body('descriptionFile', 'Invalid descriptionFile').exists().isString(),
  body('comment', 'Invalid comment').exists().isString(),
  body('fields', 'Invalid fields').exists().isArray(),
  body('criteriaGroups', 'Invalid criteriaGroups').exists().isArray(),
  body('marks', 'Invalid marks').exists().isArray()
]
