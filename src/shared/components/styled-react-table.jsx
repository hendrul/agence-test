/* eslint-disable indent */
import * as React from 'react'
import styled from 'styled-components'
import { red500, green500 } from 'material-ui/styles/colors'
import accounting from 'accounting'

const CurrencyFormatter = ({
  children, strong, colored, negativeColor, positiveColor, ...props
}) => (
  <div {...props}>
    {accounting.formatMoney(children, 'R$ ', 2, '.', ',')}
  </div>
)

export const CurrencyCell = styled(CurrencyFormatter).attrs({
  negativeColor: props => props.negativeColor || props.colored && red500 || undefined,
  positiveColor: props => props.positiveColor || props.colored && green500 || undefined,
})`
  flex: 1;
  text-align: right;
  ${({ strong }) => (strong ? 'font-weight: bold;' : '')}
  ${({
    color, colored, positiveColor, negativeColor, children,
  }) => {
    if (color) return `color: ${color};`
    if ((colored || positiveColor) && children > 0) {
      return `color: ${positiveColor};`
    } else if ((colored || negativeColor) && children < 0) {
      return `color: ${negativeColor};`
    }
    return ''
  }}
`
