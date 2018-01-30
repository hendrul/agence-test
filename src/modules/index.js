import loadableModule from 'shared/components/loadable-module'

module.exports = {
  Home: loadableModule(() => import('./Home')),
  Comercial: loadableModule(() => import('./Comercial')),
}
