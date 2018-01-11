import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'

import Menu from 'shared/components/drawer-menu'
import appLogo from 'assets/images/logo.gif'
import theme from 'shared/themes/defaultTheme'

const history = createBrowserHistory()

try { // to prevent error because of loading twice
  injectTapEventPlugin()
} catch (e) {
  console.warn(e)
}
render(
  <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
    <Router history={history}>
      <div>
        <Menu id={1} logo={appLogo} docked open width={255} />
        <Switch>
          <Route render={() => <div>Agence App</div>} />
        </Switch>
      </div>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root'),
)
