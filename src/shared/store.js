import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import promiseMiddleware from 'redux-promise'
import { reducer as uiReducer } from 'redux-ui'
import createBrowserHistory from 'history/createBrowserHistory'
import { routerMiddleware, routerReducer, LOCATION_CHANGE } from 'react-router-redux'
import handleTransitions from 'shared/middlewares/history-transition-enhancer'

import { loadActions } from 'shared/actions'

const modulesCtx = require.context('../modules/', true, /(^|\/)actions\.js$/)
const sharedCtx = require.context('./actions/', true, /^(?!.*(^|\/)includes)[\w/-]+\.js$/)

const { actions, defaults, reducer: appReducer } = loadActions({
  context: [modulesCtx, sharedCtx],
  dispatchHandler: () => module.exports.dispatch,
  historyHandler: () => module.exports.history,
})
global.appActions = actions

const rootReducer = combineReducers({
  app: appReducer,
  router: routerReducer,
  ui: uiReducer,
})

export const history = createBrowserHistory()

const store = createStore(
  rootReducer, { app: defaults },
  compose(
    applyMiddleware(
      promiseMiddleware,
      routerMiddleware(history), // Middleware for intercepting and dispatching navigation actions
    ),
    handleTransitions(history),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
)

export const { dispatch } = store
export default store
