const { Router } = require('express')
const { crudGeneratorMiddleware } = require('./crud-generator.js')

const router = Router()
const basePath = '/api'
router.use(basePath, crudGeneratorMiddleware())
router.get(basePath, (req, res) => {
  const endpoints = []
  for (const model of req.model) {
    endpoints.push(`${basePath}/${model.slug}`)
  }
  res.json({ endpoints })
})

module.exports = router
