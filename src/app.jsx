import React from 'react'
import { render } from 'react-dom'
import { Route, Switch } from 'react-router-dom'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import 'react-table/react-table.css'

import Menu from 'shared/components/drawer-menu'
import appLogo from 'assets/images/logo.gif'
import theme from 'shared/themes/defaultTheme'
import store, { history } from 'shared/store'


import {
  Comercial,
} from './modules'

try { // to prevent error because of loading twice
  injectTapEventPlugin()
} catch (e) {
  console.warn(e)
}
render(
  <Provider store={store}>
    <MuiThemeProvider muiTheme={getMuiTheme(theme)}>
      <ConnectedRouter history={history}>
        <div>
          <Menu id={1} logo={appLogo} docked open width={255} />
          <Switch>
            <Route path="/comercial" component={Comercial} />
            <Route render={() => <div>Agence App</div>} />
          </Switch>
        </div>
      </ConnectedRouter>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root'),
)
