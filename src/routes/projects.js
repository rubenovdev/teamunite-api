// Dependencies
const { validationResult } = require('express-validator')
const { Router } = require('express')

// Variables
const router = new Router()

// Models
const Project = require('../models/Project')
const Company = require('../models/Company')

// Validators
const { projectValidators } = require('../utils/validators')

// GET /v1/projects
router.get('/', async (req, res) => {
  try {
    const projects = await Project.find()
      .populate('curators')
      .populate('company')

    return res.status(200).json(projects)
  } catch (e) {
    console.log(e)
    return res
      .status(500)
      .json({ message: 'Что-то пошло не так, попробуйте позже' })
  }
})

// GET /v1/projects/:status
router.get('/:status', async (req, res) => {
  try {
    const { status } = req.params
    const projects = await Project.find({ status })
      .populate('company')
      .populate('curators')
      .populate('vacancies')

    return res.status(200).json(projects)
  } catch (e) {
    console.log(e)
    return res
      .status(500)
      .json({ message: 'Что-то пошло не так, попробуйте позже' })
  }
})

// POST /v1/projects
router.post('/', projectValidators, async (req, res) => {
  try {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ message: errors.array()[0].msg })
    }

    const {
      name,
      description,
      faculty,
      company,
      vacancies,
      curators
    } = req.body

    const project = new Project({
      name,
      description,
      faculty,
      company,
      vacancies,
      curators
    })
    await project.save()

    const selectedCompany = await Company.findById(company)
    if (selectedCompany) {
      if (selectedCompany.projects) {
        selectedCompany.projects = [...selectedCompany.projects, project]
      } else {
        selectedCompany.projects = [project]
      }
      await selectedCompany.save()
    }
    return res.status(201).json(project)
  } catch (e) {
    console.log(e)
    return res
      .status(500)
      .json({ message: 'Что-то пошло не так, попробуйте позже' })
  }
})

module.exports = router
