import styled from 'styled-components'
import StyledMuiHoc from 'styled-mui-hoc'
import { responsiveStyle } from 'styled-system'

module.exports = StyledMuiHoc(
  styled.div`
    ${responsiveStyle('border', 'border')}
    ${responsiveStyle('border-top', 'borderTop')}
    ${responsiveStyle('border-bottom', 'borderBottom')}
    ${responsiveStyle('border-left', 'borderLeft')}
    ${responsiveStyle('border-right', 'borderRight')}
  `
)