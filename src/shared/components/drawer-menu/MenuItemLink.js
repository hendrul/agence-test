import React from 'react'
import MenuItem from 'material-ui/MenuItem'
import { Link, withRouter } from 'react-router-dom'

const MenuItemLink = ({
  history,
  match,
  location,
  staticContext,
  primaryText,
  basePath = '',
  containerElement,
  ...props
}) => {
  let to = `${basePath}/${primaryText.toLowerCase()}`
  return <MenuItem
    primaryText={primaryText}
    onClick={(e) => {
      // Prevenir click si "to" es la ruta base del location.pathname actual
      location.pathname.startsWith(to) && e.preventDefault()
    }}
    containerElement={<Link to={to}/>}
    {...props}
  />
}

export default withRouter(MenuItemLink)
