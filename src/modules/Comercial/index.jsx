import React, { Component } from 'react'
import path from 'path'
import { Tab } from 'material-ui/Tabs'
import { Route } from 'react-router-dom'
import { push, LOCATION_CHANGE } from 'react-router-redux'
import { connect } from 'react-redux'
import ui from 'redux-ui'

import TabBar from 'shared/components/tab-bar'
import Reports from './Reports'

@ui({
  key: 'comercial',
  state: {
    activeTab: 'relatorio',
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
class ComercialModule extends Component {
  componentWillReceiveProps(nextProps) {
    const nextPath = nextProps.location.pathname
    if (/^\/comercial$/.test(nextPath)) { this.onChange(nextProps.ui.activeTab) }
  }

  onChange = (value) => {
    this.props.dispatch(push({
      pathname: path.join(this.props.match.url, value),
      state: { activeTab: value },
    }))
  }

  render() {
    const { match, ui: { activeTab } } = this.props
    return (
      <TabBar title="Comercial" onChange={this.onChange} value={activeTab}>
        <Tab label="Relatorio" value="relatorio">
          <Route path={`${match.url}/relatorio`} component={Reports} />
        </Tab>
      </TabBar>
    )
  }
}

export default connect()(ComercialModule)
