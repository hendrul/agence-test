import * as React from 'react'
import ui from 'redux-ui'

import Reports from 'shared/components/reports'
import PerformaceReport from './performance.rpt.jsx'

const { Report } = Reports

@ui({
  key: 'comercial',
  state: {
    selectedReport: '',
  },
  reducer: (state, { type, payload: location }) => {
    if (type === LOCATION_CHANGE) {
      return {
        ...state,
        ...location.state,
      }
    }
    return state
  },
})
class ComercialReports extends React.Component {
  render() {
    return (
      <Reports>
        <Report name="Comercial Performace" component={PerformaceReport} />
      </Reports>
    )
  }
}

export default ComercialReports
