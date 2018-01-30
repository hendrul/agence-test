import request from 'superagent'
import _get from 'lodash/get'
import _set from 'lodash/set'
import _merge from 'lodash/mergeWith'

export type ConsultorVerbatim = {
  co_usuario: string,
  no_usuario: string,
}
export type Consultor = {
  code: string,
  name: string,
}

const REPORT_ENDPOINT = '/api/cao_usuarios/reports/comercial_performance'

let PATH
export default class {
  constructor(path) {
    PATH = path
  }
  defaults = {
    consultors: {
      error: undefined,
      fetching: false,
      data: [],
    },
    performance: {
      error: undefined,
      fetching: false,
      data: [],
    },
    error: undefined,
    fetching: false,
  }
  selectors = {
    $getAll: state => _get(state, `${PATH}`),
    $getPerformance: state => _get(state, `${PATH}.performance`),
    $getConsultors: state => _get(state, `${PATH}.consultors`),
  }
  actionCreators = {
    reportFetching: undefined,
    reportFetched: undefined,
    performanceFetching: undefined,
    performanceFetched: undefined,
    consultorsFetching: undefined,
    consultorsFetched: undefined,
  }
  actionHandlers = {
    reportFetching: {
      next: state => _merge({}, state, _set({}, `${PATH}`, {
        fetching: true,
        error: undefined,
      })),
    },
    reportFetched: {
      next: state => _merge({}, state, _set({}, `${PATH}`, {
        fetching: false,
        error: undefined,
      })),
      throw: (state, { payload: err }) => _merge({}, state, _set({}, `${PATH}`, {
        fetching: false,
        error: err,
      })),
    },
    performanceFetching: {
      next: state => _merge({}, state, _set({}, `${PATH}.performance`, {
        fetching: true,
        error: undefined,
      })),
    },
    performanceFetched: {
      next: (state, { payload: fetched }) => _merge(
        {},
        state,
        _set({}, `${PATH}.performance`, {
          data: fetched,
          fetching: false,
          error: undefined,
        }),
      ),
      throw: (state, { payload: err }) => (
        _merge(
          {},
          state,
          _set({}, `${PATH}.performance`, {
            fetching: false,
            error: err,
            data: [],
          }),
        )
      ),
    },
    consultorsFetching: {
      next: state => _merge({}, state, _set({}, `${PATH}.consultors`, {
        fetching: true,
        error: undefined,
      })),
    },
    consultorsFetched: {
      next: (state, { payload: fetched }) => _merge(
        {},
        state,
        _set({}, `${PATH}.consultors`, {
          fetching: false,
          error: undefined,
          data: fetched,
        }),
      ),
      throw: (state, { payload: err }) => (
        _merge(
          {},
          state,
          _set({}, `${PATH}.consultors`, {
            fetching: false,
            error: err,
            data: [],
          }),
        )
      ),
    },
  }
  sideEffects = {
    async reportFetch(consultors: Array<Consultor>, since: Date|string, until: Date|string) {
      const {
        '#reportFetching': fetching,
        '#reportFetched': fetched,
      } = _get(global.appActions, PATH)
      try {
        fetching()

        await Promise.all([
          this.performanceFetch(consultors, since, until),
        ])

        fetched()
      } catch (err) {
        fetched(err)
        throw err
      }
    },

    async performanceFetch(consultors: Array<Consultor>, since: Date|string, until: Date|string) {
      const {
        '#performanceFetching': fetching,
        '#performanceFetched': fetched,
      } = _get(global.appActions, PATH)
      try {
        fetching()

        const consultorsQs = consultors.map(code => `usuarios[]=${code}`).join('&')
        const qs = `?fecIni=${since.toISOString()}&fecFin=${until.toISOString()}&${consultorsQs}`
        const endpoint = `${REPORT_ENDPOINT}${qs}`
        const res = await request.get(endpoint).timeout(20000)
        if (res.statusCode !== 200) throw new Error(`Non 200 http status response (${res.statusCode})`)
        const data = res.body

        fetched(data)
      } catch (err) {
        fetched(err)
        throw err
      }
    },

    async consultorsFetch() {
      const {
        '#consultorsFetching': fetching,
        '#consultorsFetched': fetched,
      } = _get(global.appActions, PATH)
      try {
        fetching()

        const endpoint = '/api/cao_usuarios'
        const res = await request.get(endpoint).timeout(20000)
        let data = res.body
        data = data.map(u => ({ code: u.co_usuario, name: u.no_usuario })).filter(u => u.code)

        fetched(data)
      } catch (err) {
        fetched(err)
        throw err
      }
    },
  }
}
