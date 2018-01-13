const fs = require('fs')
const path = require('path')
const _ = require('lodash')
const { pluralize } = require('inflection')
const { Sequelize, Model } = require('sequelize')
const { createNamespace } = require('continuation-local-storage')

const MODELS_DIR = './lib'
const SEQUELIZE_NS = 'sequelize-ns'

module.exports = {
  init(config) {
    const sequelize = new Sequelize(config.database, config.user, config.password, config)
    // Configuramos CLS
    sequelize.cls = createNamespace(SEQUELIZE_NS)
    global.Promise = Sequelize.Promise

    // Convertimos campos de camelCase a underscored
    sequelize.addHook('beforeDefine', (attributes, options) => {
      Object.keys(attributes).forEach((key) => {
        if (typeof attributes[key] !== 'function') {
          attributes[key].field = _.snakeCase(key)
        }
      })
    })
    const models = this
    fs.readdirSync(path.join(__dirname, MODELS_DIR))
      .filter(modelFile => /\.js$/.test(modelFile) && !/^_.*/.test(modelFile))
      .forEach((modelFile) => {
        const modelName = modelFile.slice(0, -3)
        const modelPath = path.join(__dirname, MODELS_DIR, modelName)
        let modelLoader = require(modelPath)
        modelLoader = modelLoader.default || modelLoader
        const model = modelLoader(sequelize, Sequelize)
        if (!model || !(model.prototype instanceof sequelize.Model)) {
          throw new Error(`Se esperaba que el archivo de modelo (${modelName}.js) retornara una clase derivada de Model`)
        }
        model.slug = model.options.slug || _.snakeCase(pluralize(model.name))
        models[modelName] = model
      })

    models[Symbol.iterator] = function* () {
      for (const modelName in this) {
        const model = this[modelName]
        if (model.prototype instanceof Model) {
          yield model
        }
      }
    }

    for (const model of models) {
      // Ejecutamos las asociaciones de todos los modelos
      if (model.associate) model.associate()

      //Cambiamos los nombres de modelos en referencias por su nombre de tabla
      for (let attrName in model.rawAttributes) {
        let attr = model.rawAttributes[attrName]
        if (attr.references) {
          let references = typeof attr.references == 'string' ?  { model: attr.references } : attr.references
          let refModel = sequelize.models[references.model]
          if (refModel !== undefined) {
            attr.references = {
              model: refModel.tableName,
              key: attr.references.key ? (refModel.rawAttributes[attr.references.key] || {}).field : 'id',
            }
          }
        }
      }
    }

    // Sequelize no soporta funcion en defaultScope
    for (const model of models) {
      if (typeof model.options.defaultScope === 'function') {
        model.addScope('defaultScope', model.options.defaultScope(), { override: true })
      }
    }

    models.Sequelize = Sequelize
    models.sequelize = sequelize
    models.transaction = sequelize::sequelize.transaction
    models.sync = sequelize::function (opts) {
      opts = _.defaults({}, opts, {
        force: true,
        match: /^test|test$/i,
      })
      return this.sync(opts)
    }
    return models
  },
}
