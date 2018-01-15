const path = require('path')
const fs = require('fs')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const _ = require('lodash')

const appConfig = require('../app-config')
const ws = require('./services')
const model = require('./model')

const app = express()
global.configs = appConfig

const WWW = _.get(global.configs, 'www')

process.on('uncaughtException', (err) => {
  console.error(err.stack)
})

if (process.env.stage === 'dev') {
  app.set('json spaces', 2)
}

app.use(methodOverride('X-HTTP-Method-Override'))

const corsOpts = { origin: ['*'] }

app.use(cors(corsOpts))
app.use(cookieParser())
app.use(bodyParser.json({ limit: '1mb' }))
app.use(bodyParser.urlencoded({ limit: '1mb', extended: false }))

const sqlConfigs = global.configs.data.sql
if (!sqlConfigs.$activeProfile) throw new Error('Debe seleccionar un perfil de conexion con el atributo "$activeProfile" en "app-config.json"')
const activeSqlProfile = sqlConfigs[sqlConfigs.$activeProfile]
if (!activeSqlProfile) throw new Error(`No se encontro el perfil de conexion ${sqlConfigs.$activeProfile}`)
const modelInstance = model.init(activeSqlProfile)
app.use((req, res, next) => {
  req.model = modelInstance
  next()
})

function serveStatic(rootDir) {
  const msg = `Sirviendo archivos estaticos desde ${path.resolve(rootDir)}`
  let serving
  if (fs.existsSync(rootDir)) {
    console.log(msg)
    serving = express.static(rootDir)
  }
  return function (req, res, next) {
    if (!serving && fs.existsSync(rootDir)) {
      console.log(msg)
      serving = express.static(rootDir)
    }
    if (serving) serving(req, res, next)
    else next()
  }
}

app.use(serveStatic(WWW))
app.use(ws)

module.exports = app
