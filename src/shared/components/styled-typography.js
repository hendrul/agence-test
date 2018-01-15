import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'axs'
import defaultTheme from 'shared/themes/defaultTheme'

const typographyTheme = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: 14,
  fontWeightLight: 300,
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontColor: defaultTheme.typography.fontColor ? defaultTheme.typography.fontColor : '#000000'
}

const Typography = ({
  align,             // '*inherit', 'left', 'center', 'right', 'justify'
  classes,           // Object
  color = typographyTheme.fontColor, // '*inherit','secondary','accent','default'
  component,         // string|Function
  gutterBottom,      // false|true
  headlineMapping,   // { display4: 'h1', display3: 'h1', display2: 'h1', display1: 'h1', headline: 'h1', title: 'h2', subheading: 'h3', body2: 'aside', body1: 'p',}
  noWrap,            // false|true
  paragraph,         // false|true
  type,              //'display4', 'display3', 'display2', 'display1', 'headline', 'title', 'subheading', 'body2', '*body1', 'caption', 'button'
  ...props
}) => {
  props.is = component
  return (
  < Text {
    ...(() => {
      switch (type) {
        case 'display4':
          return {
            fontWeight: typographyTheme.fontWeightLight,
            fontSize: 112,
            css: {
              color,
              ...props.css
              }
          }
          break
        case 'display3':
          return {
            fontWeight: typographyTheme.fontWeightRegular,
            fontSize: 56,
            css: {
              color,
              ...props.css
            }
          }
          break
        case 'display2':
          return {
            fontWeight: typographyTheme.fontWeightRegular,
            fontSize: 45,
            css: {
              color,
              ...props.css
            }
          }
          break
        case 'display1':
          return {
            fontWeight: typographyTheme.fontWeightRegular,
            fontSize: 34,
            css: {
              color,
              ...props.css
            }
          }
          break
        case 'headline':
          return {
            fontWeight: typographyTheme.fontWeightRegular,
            fontSize: 24,
            css: {
              color,
              ...props.css
            }
          }
          break
        case 'title':
          return {
            fontWeight: typographyTheme.fontWeightMedium,
            fontSize: 20,
            css: {
              color,
              ...props.css
            }
          }
          break
        case 'subheading':
          return {
            fontWeight: typographyTheme.fontWeightRegular,
            fontSize: 16,
            css: {
              color,
              ...props.css
            }
          }
          break
        case 'body2':
          return {
            fontWeight: typographyTheme.fontWeightMedium,
            fontSize: 14,
            css: {
              color,
              ...props.css
            }
          }
          break
        case 'body1':
          return {
            fontWeight: typographyTheme.fontWeightRegular,
            fontSize: typographyTheme.fontSize,
            css: {
               color,
               ...props.css
            }
          }
          break
        case 'caption':
          return {
            fontWeight: typographyTheme.fontWeightRegular,
            fontSize: 12,
            css: {
              color,
              ...props.css
            }
          }
          break
        case 'button':
          return {
            fontWeight: typographyTheme.fontWeightMedium,
            fontSize: 14,
            css: {
              color,
              ...props.css
            }
          }
          break
        default:
          return {
            fontWeight: typographyTheme.fontWeightRegular,
            fontSize: typographyTheme.fontSize,
            css: {
              color,
              ...props.css
            }
          }
        }
      })()
    } {...props}/>
  )
}

export default Typography
