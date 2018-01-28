/* @flow */
import * as React from 'react'
import _loadable from 'react-loadable'

export type Module = React.ComponentType<any>
export type Loader = () => Module

export default (loader: Loader) => {
  return _loadable({
    loader,
    loading: () => null
  })
}