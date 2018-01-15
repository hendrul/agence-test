import React from 'react'
import Menu from 'material-ui/Menu'
import Divider from 'material-ui/Divider'

import MenuItemLink from '../MenuItemLink'
import {
  AgenceIcon,
  ProjetosIcon,
  AdministrativoIcon,
  ComercialIcon,
  FinancieroIcon,
  UsuarioIcon,
  HelpIcon,
  ConfigurationsIcon,
  ExitIcon,
} from '../icons'

export default props => (
  <Menu {...props}>
    <MenuItemLink primaryText="Agence" leftIcon={AgenceIcon} />
    <MenuItemLink primaryText="Projetos" leftIcon={ProjetosIcon} />
    <MenuItemLink primaryText="Administrativo" leftIcon={AdministrativoIcon} />
    <MenuItemLink primaryText="Comercial" leftIcon={ComercialIcon} />
    <MenuItemLink primaryText="Financiero" leftIcon={FinancieroIcon} />
    <MenuItemLink primaryText="Usuario" leftIcon={UsuarioIcon} />
    <Divider />
    <MenuItemLink primaryText="Ajuda" leftIcon={HelpIcon} />
    <MenuItemLink primaryText="Configurações" leftIcon={ConfigurationsIcon} />
    <MenuItemLink primaryText="Sair" leftIcon={ExitIcon} />
  </Menu>
)
