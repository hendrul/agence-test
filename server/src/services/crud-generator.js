const { Router } = require('express')
const _ = require('lodash')

const { sendHttpError, throwHttpError } = require('./utils')

const crudGeneratorMiddleware = () => {
  let services
  return (req, res, next) => {
    if (!services) { services = generateCRUDServices(req.model) }
    services(req, res, next)
  }
}

const generateCRUDServices = (models) => {
  const router = Router()
  for (const model of models) {
    const service = generateCRUDService(model, `/${model.slug}`)
    router.use(service)
  }
  return router
}

const generateCRUDService = (model, path) => {
  const router = Router()
  router.model = model.name
  router.endpoint = path || `/${_.snakeCase(model.name)}`
  router.get(router.endpoint, getAll)
  router.get(`${router.endpoint}/:id`, get)
  router.post(router.endpoint, create)
  router.put(`${router.endpoint}/:id`, update)
  router.delete(`${router.endpoint}/:id`, drop)

  // ----------- GET ALL ----------------------
  async function getAll(req, res) {
    req.model.transaction(async (tx) => {
      let found
      try {
        found = await model.findAll()
      } catch (err) {
        await sendHttpError(err, res)
        return
      }
      res.json(found.map(ins => ins.get({ plain: true })))
    })
  }

  // -------------- GET ----------------------
  async function get(req, res) {
    const transaction = await req.model.transaction()
    let found
    try {
      found = await model.findById(req.params.id, { transaction })
      if (!found) await throwHttpError(404)
      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      await sendHttpError(err, res)
      return
    }
    res.json(found.get({ plain: true }))
  }


  // ----------- CREATE ----------------------
  async function create(req, res) {
    const transaction = await req.model.transaction({ autocommit: false })
    let newInstance
    try {
      const deepIncludes = (assocs, path) => {
        path = path || [model.name]
        return _.compact(Object.values(assocs).map((assoc) => {
          if (path.includes(assoc.target.name)) return undefined
          return {
            as: assoc.as,
            model: assoc.target,
            include: deepIncludes(assoc.target.associations, path.concat(assoc.target.name)),
          }
        }))
      }
      newInstance = await model.create(req.body, {
        transaction,
        include: deepIncludes(model.associations),
      })
      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      await sendHttpError(err, res)
      return
    }
    res.status(201).json({ id: newInstance.id })
  }

  // ----------- UPDATE ----------------------
  async function update(req, res) {
    const transaction = await req.model.transaction({ autocommit: false })
    try {
      await model.update(req.body, {
        where: { id: req.params.id },
        transaction,
      })
      await transaction.commit()
    } catch (err) {
      await transaction.rollback()
      await sendHttpError(err, res)
      return
    }
    res.sendStatus(204)
  }

  // -------------- DROP ----------------------
  async function drop(req, res) {
    const transaction = await req.model.transaction({ autocommit: false })
    try {
      await model.destroy({
        where: { id: req.params.id },
        transaction,
      })
      await transaction.commit()
      res.sendStatus(204)
    } catch (err) {
      await transaction.rollback()
      await sendHttpError(err, res)
    }
  }

  return router
}

module.exports = {
  crudGeneratorMiddleware,
  generateCRUDServices,
  generateCRUDService,
}
