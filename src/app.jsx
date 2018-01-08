import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

const history = createBrowserHistory()

try { // to prevent error because of loading twice
  injectTapEventPlugin()
} catch (e) {
  console.warn(e)
}
render(
  <MuiThemeProvider>
    <Router history={history}>
      <Switch>
        <Route render={() => <div>Agence App</div>} />
      </Switch>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root'),
)
