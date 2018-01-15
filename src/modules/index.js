import _loadable from 'react-loadable'

function loadable(opts) {
  return _loadable(Object.assign({
    loading: () => null,
  }, opts))
}

module.exports = {
  Comercial: loadable({ loader: () => import('./Comercial') }),
}
