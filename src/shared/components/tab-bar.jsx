import React, { Component } from 'react'
import Styled from 'styled-components'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton'
import Tabs from 'material-ui/Tabs'
import Menu from 'material-ui/svg-icons/navigation/menu'
import MoreVert from 'material-ui/svg-icons/navigation/more-vert'
import {white} from 'material-ui/styles/colors'

const App = Styled.div`
   margin: -8px; 
   padding-left: ${props => props.openMenu ? props.paddingLeft : 0}px;
   top: 0px;
`

class TabBar extends Component {
  constructor(props) {
    super(props)
  }

  static defaultProps = {
    openMenu: true,
    paddingLeft: 255,
    onOpenDrawer: e=>e,
    onMore: e=>e
  }

  render = () => {
    const { title, openMenu, paddingLeft, onOpenDrawer, onMore, ...tabsProps } = this.props
    return (
      <App
        className="row"
        openMenu={openMenu}
        paddingLeft={paddingLeft}>
          <AppBar
              title={title} zDepth={0}
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
          <Tabs {...tabsProps}/>
      </App>
    )
  }
}

export default TabBar