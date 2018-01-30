export default (history, catchAllHandler) => next => (reducer, initialState) => {
  const store = next(reducer, initialState)
  const executeTransition = transitionData => {
    if (transitionData) {
      const method = transitionData.method || 'push'
      history[method](transitionData)
    }
  }
  return {
    ...store,
    dispatch(action) {
      const { meta } = action
      const transitionHandler = meta ?
        (meta.transition || catchAllHandler) :
        catchAllHandler

      const prevState = transitionHandler && store.getState()
      store.dispatch(action)
      const nextState = transitionHandler && store.getState()

      let func = typeof transitionHandler === 'object' ?
        transitionHandler[ action.error ? 'failure' : 'success' ] : transitionHandler

      const transitionData = func ? func(prevState, nextState, action) : undefined

      if (transitionData) {
        if (typeof transitionData.then === 'function') {
          transitionData
            .then(executeTransition)
            .catch(executeTransition)
        } else {
          executeTransition(transitionData)
        }
      }

      return action
    },
  }
}