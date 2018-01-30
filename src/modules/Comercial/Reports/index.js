import * as React from 'react'
import ui from 'redux-ui'
import { LOCATION_CHANGE } from 'react-router-redux'
import { connect } from 'react-redux'

import Reports from 'shared/components/reports'
import PerformanceReport from './performance'


@ui({
  state: {
    selectedReport: '',
  },
  reducer: (state, { type, payload: location }) => {
    if (type === LOCATION_CHANGE) {
      state = state.merge(location.state)
    }
    return state
  },
})
class ComercialReports extends React.PureComponent {
  render() {
    return (
      <Reports>
        <PerformanceReport icon={<PerformanceReport.Icon />} title="Performance Comercial" />
      </Reports>
    )
  }
}


export default connect()(ComercialReports)
