import React from 'react'
import { Flex } from 'grid-styled'
import Drawer from 'material-ui/Drawer'
import Avatar from 'material-ui/Avatar'
import Divider from 'material-ui/Divider'
import ArrowDown from 'material-ui/svg-icons/navigation/arrow-drop-down'
import Typography from "shared/components/styled-typography"
import {
  VSpace1,
  VSpace2,
  VSpace3,
  HSpace,
  HSpace2
} from "shared/components/styled-spacing"

const menuFileRegexp = /\.\/menu(\d+)\.jsx?$/i
const requireCtx = require.context('./menues', false, /\.\/menu(\d+)\.jsx?$/i)
const menues = requireCtx
  .keys()
  .sort((a, b) => parseInt(a.match(menuFileRegexp)[1]) >
                  parseInt(b.match(menuFileRegexp)[1]))
  .map(key => {
    let menu = requireCtx(key)
    menu = menu.default || menu
    let id = key.match(menuFileRegexp)[1]
    menu.$id = parseInt(id)
    return menu
  })

const Menu = ({ id = 1, logo, docked = true, open = true, width = 255 }) => {
  let Menu = menues.find(menu => menu.$id == id)
  if(!Menu) throw new Error(`Menu No.(${id}) not found`)
  let {id:_id, ...props} = arguments
  return (
    <div>
      <Drawer {...props}>
        <Flex column>
          <VSpace2 />
          <Flex>
            <HSpace2 />
            <Avatar />
            <HSpace mr={108}/>
            <img src={logo} width={78} height={29}/>
          </Flex>
          <VSpace1 />
          <Flex>
            <HSpace2 />
            <Typography type="caption" p={1}>
              hendrul@gmail.com
            </Typography>
            <HSpace2 />
            <ArrowDown />
          </Flex>
          <VSpace2 />
        </Flex>
        <Divider />
        {<Menu/>||<div>No menu found</div>}
      </Drawer>
    </div>
  )
}

export default Menu
