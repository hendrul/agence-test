const { UniqueConstraintError } = require('sequelize')
const { ServerResponse } = require('http')
const HTTPStatus = require('http-status')

const sendHttpError = async (httpCode, msg, res) => {
  if ( msg instanceof ServerResponse ) {
    res = msg
    msg = undefined
  }
  let err
  if (httpCode instanceof Error) {
    err = httpCode
  } else {
    if (typeof httpCode === 'string') {
      msg = httpCode
      httpCode = 500
    }
    err = new Error(`${httpCode} ${HTTPStatus[httpCode]}`)
    err.httpCode = httpCode
  }
  err.message = msg || err.message
  err.httpCode = err.httpCode || 500
  if (err instanceof UniqueConstraintError && err.httpCode !== 409) {
    const errorItem = err.errors[0]
    err.message = `${errorItem.type}: ${errorItem.message}. value: ${errorItem.value}`
    err.httpCode = 409
    console.error(`${err.message}
       SQL: ${err.sql}`)
  } else {
    console.error(err.stack)
    err.message = undefined
  }
  if (res) {
    err.message ?
      res.status(err.httpCode).json({errorMessage: err.message}) :
      res.sendStatus(err.httpCode)
  }
  return err
}

const throwHttpError = async (httpCode, msg) => {
  throw await sendHttpError(httpCode, msg)
}

module.exports = {
  sendHttpError,
  throwHttpError,
}
