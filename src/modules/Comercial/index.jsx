import React, { Component } from 'react'
import ReportsIcon from 'react-icons/lib/fa/line-chart'
import DummyIcon from 'react-icons/lib/fa/chain-broken'

import Reports from './Reports'
import asModule from 'shared/components/module-hoc'

class ComercialModule extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return [
      <DummySubModule icon={<DummyIcon />} name="Submodulo 1" slug="submodulo1" />,
      <DummySubModule icon={<DummyIcon />} name="Submodulo 2" slug="submodulo2" />,
      <Reports icon={<ReportsIcon />} name="Relatorio" slug="relatorio" default />,
    ]
  }
}
const DummySubModule = () => null

export default asModule('Comercial', 'comercial')(ComercialModule)
