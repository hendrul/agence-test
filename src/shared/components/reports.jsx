import * as React from 'react'
import ui from 'redux-ui'
import { Route, Switch, withRouter } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import Paper from 'material-ui/Paper'
import { Flex } from 'grid-styled'



import IconMenu from 'material-ui/IconMenu'
import IconButton from 'material-ui/IconButton'
import FontIcon from 'material-ui/FontIcon'
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more'
import DropDownMenu from 'material-ui/DropDownMenu'
import RaisedButton from 'material-ui/RaisedButton'
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar'

@ui({
  state: {
    selectedReport: 0,
  },
})
class Reports extends React.PureComponent {

  onChange = (evt, value) => {
    this.props.updateUI({ selectedReport: value })
  }

  render() {
    const { ui: { selectedReport } } = this.props
    const ReportNode = React.Children.toArray(this.props.children)[selectedReport] || {}
    return (
      <Flex column>
        <Toolbar >
          <ToolbarGroup>
            <ToolbarTitle text={ReportNode.props.title} />
          </ToolbarGroup>
          <ToolbarGroup >
            <DropDownMenu
              value={selectedReport}
              onChange={this.onChange}
              // iconButton={
              //   <IconButton touch>
              //     <NavigationExpandMoreIcon />
              //   </IconButton>
              // }
            >
              {React.Children.map(this.props.children, (child, i) => (
                <MenuItem key={i}
                          value={i}
                          primaryText={child.props.title}
                          leftIcon={child.props.icon} />
              ))}
            </DropDownMenu>
          </ToolbarGroup>
        </Toolbar>
        {ReportNode}
      </Flex>
    )
  }
}

export default withRouter(Reports)
