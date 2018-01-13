const { Router } = require('express')
const { crudGeneratorMiddleware } = require('./crud-generator.js')

const router = Router()
router.use(crudGeneratorMiddleware())

module.exports = router
