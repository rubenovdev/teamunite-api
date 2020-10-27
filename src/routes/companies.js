// Dependencies
const { validationResult } = require('express-validator')
const { Router } = require('express')
const shortid = require('shortid')
const path = require('path')

// Variables
const router = new Router()

// Models
const Company = require('../models/Company')

// Validators
const { companyValidators } = require('../utils/validators')

// GET /v1/companies
router.get('/', async (req, res) => {
  try {
    const companies = await Company.find().populate('projects', '-company')
    return res.status(200).json(companies)
  } catch (e) {
    console.log(e)
    return res
      .status(500)
      .json({ message: 'Что-то пошло не так, попробуйте позже' })
  }
})

// GET /v1/companies/:id
router.get('/:id', async (req, res) => {
  try {
    const company = await Company.findById(req.params.id).populate('projects')
    if (company) {
      return res.status(200).json(company)
    }
    return res.status(404).json({ message: 'Компания не найдена' })
  } catch (e) {
    console.log(e)
    return res
      .status(500)
      .json({ message: 'Что-то пошло не так, попробуйте позже' })
  }
})

// POST /v1/companies
router.post('/', companyValidators, async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg })
    }
    if (!req.files) {
      return res.status(400).json({ message: 'Загрузите логотип компании' })
    }
    const { name, description, activity, internship } = req.body
    const { logo } = req.files
    if (!logo) {
      return res.status(400).json({ message: 'Загрузите логотип компании' })
    }

    const extname = path.extname(logo.name).toLowerCase()
    const logoName = `logos/${name}-${shortid.generate() + extname}`
    const company = new Company({
      name,
      description,
      activity,
      logo: `/${logoName}`,
      internship
    })
    await logo.mv(path.resolve(__dirname, '..', 'uploads', logoName))
    await company.save()

    return res.status(201).json(company)
  } catch (e) {
    console.log(e)
    return res
      .status(500)
      .json({ message: 'Что-то пошло не так, попробуйте позже' })
  }
})

module.exports = router
