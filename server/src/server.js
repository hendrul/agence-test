const http = require('http')

const app = require('./app')

app.set('httpPort', process.env.PORT || 8888)
const httpServer = http.createServer(app)

const httpPort = app.get('httpPort')

httpServer.listen(httpPort)
httpServer.on('error', onError)
httpServer.on('listening', () => {
  console.log(`Listening on ${httpPort}, pid-> ${process.pid}`)
})

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error
  }

  const bind = typeof httpPort === 'string'
    ? `Pipe ${httpPort}`
    : `Port ${httpPort}`

  switch (error.code) {
    case 'EACCES':
      console.error(`${bind} requires elevated privileges`)
      process.exit(1)
      break
    case 'EADDRINUSE':
      console.error(`${bind} is already in use`)
      process.exit(1)
      break
    default:
      throw error
  }
}
