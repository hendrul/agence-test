/* eslint-disable no-multi-assign */
const path = require('path')
const fs = require('fs')
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const _ = require('lodash')

const appConfig = require('../app-config')

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
app.use(bodyParser.urlencoded({ limit: '1mb' }))

const sqlConfigs = global.configs.data.sql
if (!sqlConfigs.$activeProfile) throw new Error('Debe seleccionar un perfil de conexion con el atributo "$activeProfile" en "app-config.json"')
const activeSqlProfile = sqlConfigs[sqlConfigs.$activeProfile]
if (!activeSqlProfile) throw new Error(`No se encontro el perfil de conexion ${sqlConfigs.$activeProfile}`)

if (process.env.NODE_ENV === 'development') {
  // /////////////  WEBPACK-MIDDLEWARE + HOT-MODULE-REPLACEMENT /////////////////
  const webpack = require('webpack')
  const webpackConfig = require('../../webpack.config.babel').default
  webpackConfig.output.path = '/'
  const compiler = webpack(webpackConfig)
  app.use(require('webpack-dev-middleware')(compiler, {
    stats: { colors: true },
    publicPath: webpackConfig.output.publicPath,
  }))
  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }))
  // ////////////////// HOT-LOADING NODE.JS  /////////////////////////////
  const watcher = global.watcher = require('chokidar').watch(`${__dirname}/lib`)
  watcher.on('ready', () => {
    console.log('Chokidar Watcher READY')
    watcher.on('change', () => {
      console.log('Clearing /lib cache from server')
      Object.keys(require.cache).forEach((id) => {
        if (id.startsWith(`${__dirname}/lib`)) {
          delete require.cache[id]
        }
      })
    })
  })
} else {
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
}

app.use((req, res, next) => {
  req.model = require('./lib/model').initOnce(activeSqlProfile)
  next()
})
app.use((req, res, next) => {
  require('./lib/services')(req, res, next)
})

module.exports = app
