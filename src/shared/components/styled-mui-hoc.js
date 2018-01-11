import React from 'react'
import styled from 'styled-components'
import ss from 'styled-system'

module.exports = (Comp)=> {
  let Wrapped = ({alignSelf, ...props})=> {
    props = removeProps(props)
    return <Comp {...props}/>
  }
  return styled(Wrapped)`
    ${color}
    ${space}
    ${width}
    ${responsiveStyle('align-self', 'alignSelf')}
    ${responsiveStyle('height', 'height')}
  `
}

const addImportants = (wrapped)=> (props)=> {
  let result = wrapped(props)
  if(result === undefined || result === null) return result
  return Object.keys(result).reduce((acc, key)=> Object.assign(acc, {[key]: result[key] + ' !important'}) , {})
}

const {color, space, width, removeProps, responsiveStyle} = Object.keys(ss).reduce((acc, key)=> {
  return Object.assign(acc, {
    [key]: (/^(space|width|height|alignSelf|fontSize|color)$/.test(key)) ? addImportants(ss[key]) : ss[key]
  })
}, {
  ...ss,
  responsiveStyle: (key, prop, boolValue)=> 
    (props)=> Object.keys(ss.responsiveStyle(key, prop, boolValue)(props)).reduce(
      (acc,key)=> Object.assign(acc, {[key]: addImportants(ss[key])}), {}
    )
})

