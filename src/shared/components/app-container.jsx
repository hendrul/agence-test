/* @flow */
import * as React from 'react'
import Styled from 'styled-components'
import AppBar from 'material-ui/AppBar'
import Tabs, { Tab } from 'material-ui/Tabs'
import IconButton from 'material-ui/IconButton'
import Menu from 'material-ui/svg-icons/navigation/menu'
import MoreVert from 'material-ui/svg-icons/navigation/more-vert'
import { white } from 'material-ui/styles/colors'
import { Flex } from 'grid-styled'
import { ConnectedRouter } from 'react-router-redux'
import ui from 'redux-ui'

import { history } from 'shared/store'

const App = Styled.div`
   margin: -8px; 
   padding-left: ${props => (props.openMenu ? props.paddingLeft : 0)}px;
   top: 0px;
`
type SubModule = {
  icon: React.Node,
  name: string,
  slug: string,
  element: React.Element<any>
}

type Module = {
  icon: Node,
  name: string,
  slug: string,
  subModules: Array<SubModule>
}

type Props = {
  openMenu?: boolean,
  paddingLeft?: number,
  onOpenDrawer?: (event: SyntheticEvent<HTMLButtonElement>) => void,
  onMore?: (event: SyntheticEvent<HTMLButtonElement>) => void,
  children?: Node,
  location: any,
  match: any,
  ui: { activeTab: string, activeModule: Module },
  updateUI: any,
}

@ui({
  persist: true,
  state: {
    activeTab: '',
    activeModule: {
      icon: undefined,
      name: '',
      slug: '',
      subModules: [],
    },
  },
  // reducer: (state, { type, payload: location }) => {
  //   if (type === LOCATION_CHANGE ) {
  //     const moduleSlug = state.get('activeModule').slug
  //     if(!moduleSlug || location.pathname && !new RegExp(`^/${moduleSlug}/?`).test(location.pathname)) {
  //       state = state.set('uuid', uuid())
  //     }
  //   }
  //   return state
  // },
})
class AppContainer extends React.Component<Props> {
  static defaultProps = {
    openMenu: true,
    paddingLeft: 255,
    onOpenDrawer: e => e,
    onMore: e => e,
  }

  constructor(props) {
    super(props)
  }

  onTabChange = value => this.props.updateUI({ activeTab: value })

  render = () => {
    const {
      openMenu, paddingLeft, onOpenDrawer, onMore, children,
      ui: {
        activeTab,
        activeModule: {
          icon: moduleIcon,
          name: moduleName,
          slug: moduleSlug,
          subModules,
        },
      },
    } = this.props
    return (
      <App
        className="row"
        openMenu={openMenu}
        paddingLeft={paddingLeft}
      >
        <AppBar
          title={moduleName}
          zDepth={0}
          iconElementLeft={
            <IconButton onTouchTap={onOpenDrawer}>
              <Menu color={white} />
            </IconButton>
          }
          iconElementRight={
            <div>
              <IconButton onTouchTap={onMore} >
                <MoreVert color={white} />
              </IconButton>
            </div>
          }
        />
        <ConnectedRouter history={history}>
          <Flex column>
            <Tabs title={moduleName} onChange={this.onTabChange} value={activeTab}>
              {[].concat(subModules).length > 0 ?
                subModules.map((subModule, i) => (
                  <Tab key={i} icon={subModule.icon} label={subModule.name} value={subModule.slug}>
                    {React.Children.only(subModule.element)}
                  </Tab>
                )) :
                <Tab key={1} label="" value="" buttonStyle={{}} />
              }
            </Tabs>
            {children}
          </Flex>
        </ConnectedRouter>
      </App>
    )
  }
}

export default AppContainer
