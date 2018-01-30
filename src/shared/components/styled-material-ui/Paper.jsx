import React from 'react'
import _Paper from 'material-ui/Paper'
import styledMuiHoc from 'shared/components/styled-mui-hoc'
import styled  from 'styled-components'

export default styled(styledMuiHoc(_Paper)).attrs({
  zDepth: 2
})`
  padding: ${({p})=> p === undefined ? '32px' : p};
`
