import path from 'path'
import { createActions, handleActions } from 'redux-actions'
import reduceReducers from 'reduce-reducers'
import _merge from 'lodash/mergeWith'
import _set from 'lodash/set'
import _omit from 'lodash/omit'
import _flatten from 'lodash/flatten'
import _isPlainObject from 'lodash/isPlainObject'
import _mapValues from 'lodash/mapValues'
import _mapKeys from 'lodash/mapKeys'

import _get from 'lodash/get'
import _camelCase from 'lodash/camelCase'

const assert = console.assert

export const loadActions = ({
  context,
  dispatch,
  dispatchHandler = f => f,
  history,
  historyHandler = f => f,
}) => {
  assert(context, 'Webpack require context is required')
  assert(dispatch || dispatchHandler, 'A redux dispatch or handler function must be provided')

  const modules = _flatten([].concat(context).map(ctx => loadActionModules({
    context: ctx,
    dispatch,
    dispatchHandler,
    history,
    historyHandler,
  })))

  const mergedModules = mergeActionModules(...modules)
  return Object.assign({
    actions: _merge(
      {},
      mergedModules.actionCreators,
      mergedModules.selectors,
      mergedModules.sideEffects,
      // Bounded versions of all actionCreators and sideEffects
      // are found using the same name preceded with #
      mapKeysDeep(mergedModules.boundActionCreators, (value, key) => (typeof value === 'function' ? `#${key}` : key)),
    ),
    defaults: mergedModules.defaults,
    reducer: mergedModules.reducer,
  })
}

export function loadActionModules({
  context: requireCtx,
  dispatch,
  dispatchHandler = f => f,
  history,
  historyHandler = f => f,
}) {
  return requireCtx.keys().map((filePath) => {
    let actionModule = requireCtx(filePath)
    const modulePath = actionModule.PATH || fileToModulePath(filePath)
    actionModule = (actionModule.default || actionModule)

    let {
      actionCreators, actionHandlers, transitions, defaults,
      selectors, sideEffects, meta = {},
    } = resolveActionModule(actionModule, modulePath)

    const metas = {
      path: modulePath,
      ...meta,
    }

    dispatchHandler = typeof dispatch === 'function' ? () => dispatch : dispatchHandler
    historyHandler = typeof history === 'function' ? () => history : historyHandler

    defaults = _set({}, modulePath, defaults)
    actionCreators = processActionCreators(actionCreators, modulePath, metas, transitions, historyHandler)
    sideEffects = processSideEffects(sideEffects, modulePath, metas)
    actionHandlers = processActionHandlers(actionHandlers, actionCreators, defaults, modulePath, filePath)
    selectors = processSelectors(selectors, modulePath)
    const boundActionCreators = bindActionCreators(_merge({}, actionCreators, sideEffects), dispatchHandler)

    return {
      actionCreators, actionHandlers, selectors, defaults, sideEffects, boundActionCreators,
    }
  })
}

export function mergeActionModules(...actionModules) {
  const mergedActions = actionModules.reduce((memo, {
    actionCreators,
    actionHandlers,
    defaults,
    selectors,
    sideEffects,
    boundActionCreators,
  }) => {
    memo.actionCreators = _merge(memo.actionCreators, actionCreators)
    memo.actionHandlers.push(actionHandlers)
    memo.selectors = _merge(memo.selectors, selectors)
    memo.defaults = _merge(memo.defaults, defaults)
    memo.sideEffects = _merge(memo.sideEffects, sideEffects)
    memo.boundActionCreators = _merge(memo.boundActionCreators, boundActionCreators)
    return memo
  }, {
    actionCreators: {}, actionHandlers: [], selectors: {}, defaults: {}, sideEffects: {}, boundActionCreators: {},
  })
  mergedActions.reducer = reduceReducers(...mergedActions.actionHandlers)
  delete mergedActions.actionHandlers
  return mergedActions
}

function resolveActionModule(actionModule, path) {
  try {
    actionModule = actionModule(path)
  } catch (err) {
    actionModule = new actionModule(path)
  }
  // Merge includes recursively
  actionModule = Object.assign({}, actionModule, {
    includes: (actionModule.includes || [])
      .map(inc => resolveActionModule(inc, path)),
  })
  return _omit(_merge(...actionModule.includes, actionModule), 'includes')
}

function processActionCreators(actionCreators = {}, modulePath, metas, transitions, historyHandler) {
  // Wrap metaCreators to add our own metas, e.g. path
  return createActions(_set({}, modulePath, Object.keys(actionCreators).reduce((memo, key) => {
    let [payloadCreator, metaCreator] = [].concat(actionCreators[key])
    metaCreator = typeof metaCreator !== 'function' ? () => metaCreator : metaCreator
    metaCreator = ((metaCreator, path, transitions, historyHandler) => () => {
      const history = historyHandler()
      if (!history) { console.warn('history instance is not available.') }

      let transition
      if (history.location.pathname.replace(/\//g, '.').indexOf(modulePath) >= 0) {
        transition = _isPlainObject(transitions) ?
          transitions[key] : undefined
      }
      return _merge(
        {},
        metas,
        metaCreator(...arguments),
        transition ? { transition } : {},
        getMetasFromLastArgument(...arguments),
      )
    })(metaCreator, modulePath, transitions, historyHandler)
    return { ...memo, [key]: [payloadCreator, metaCreator] }
  }, {})))
}

function processSideEffects(sideEffects = {}, modulePath, metas) {
  // Deliver sideEffects as FSA action creators
  return createActions(_set({}, modulePath, Object.keys(sideEffects).reduce((memo, key) => ({
    ...memo,
    [key]: (sideEffects => [
      // Payload creator
      (...args) =>
      // Side effects receive all actions as bounded actions
      // let t = { actions: _merge({}, module.exports.default, module.exports.boundActionCreators) }
      // Wrap sideEffects to pass actions as "this"
        new Promise(() => sideEffects[key](...args)),
      // Metadata Creator
      () => _merge(metas, getMetasFromLastArgument(...arguments)),
    ])(sideEffects),
  }), {})))
}

function processActionHandlers(actionHandlers = {}, actionCreators, defaults, modulePath, filePath) {
  // Match actionHandlers name with actionCreator names
  return handleActions(
    Object.keys(actionHandlers).reduce((memo, key) => {
      const handler = actionHandlers[key]
      // When handler key is regular expression, do nothing
      if (!/^\/(.*)\/$/.test(key)) {
        const actionCreator = _get(actionCreators, `${modulePath}.${_camelCase(key)}`)
        if (!actionCreator) {
          console.warn(`Action handler key "${key}" does not match any action creator key in "${filePath}"`)
          return {}
        }
        key = actionCreator.toString()
      }
      return { ...memo, [key]: handler }
    }, {}),
    defaults,
  )
}

function processSelectors(selectors = {}, modulePath) {
  // Wrap selectors to pass only the given key of the state as argument
  return _set(
    {}, modulePath,
    Object.keys(selectors).reduce((memo, selector) => ({
      ...memo,
      [selector]: (selectors => state => selectors[selector](state))(selectors),
    }), {}),
  )
}

function bindActionCreators(actionCreators = {}, dispatchHandler) {
  return _merge({}, actionCreators, (objValue, srcValue) => {
    if (typeof srcValue === 'function') {
      return function () {
        const dispatch = dispatchHandler()
        if (typeof dispatch !== 'function') { throw new Error('Dispatch function is not available, I need one.') }
        dispatch(srcValue(...arguments))
      }
    }
  })
}

function getMetasFromLastArgument() {
  // If last argument is an object, keys starting with $ sign are taken as metas
  const opts = [...arguments].slice(-1)
  if (!_isPlainObject(opts)) return {}
  return Object.keys(opts)
    .filter(key => /^\$/.test(key))
    .reduce((memo, key) => ({
      ...memo,
      [key.slice(1)]: opts[key], // Remove $ sign from the meta name
    }), {})
}

const mapKeysDeep = (obj, cb) => (
  _mapValues(
    _mapKeys(obj, cb),
    val => (typeof val === 'object' ? mapKeysDeep(val, cb) : val),
  )
)

const fileToModulePath = (filePath) => {
  filePath = path.dirname(filePath)
  return filePath
    .replace(/^(\.{0,2}\/)+/, '')
    .replace(/\//g, '.')
    .toLowerCase()
}
