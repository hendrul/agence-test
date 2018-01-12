import React from 'react'
import { fade, darken } from 'material-ui/utils/colorManipulator'
import { white, black, lightBlue50 } from 'material-ui/styles/colors';

const blueValery500 = '#0f6188'
const blueValery300 = '#0083A8'

export default {
  appBar: {
    color: blueValery500
  },
  avatar: {
    backgroundColor: lightBlue50,
  },
  checkbox: {
    boxColor: blueValery300,
    checkedColor: blueValery300
  },
  datePicker: {
    selectColor: blueValery300,
    headerColor: blueValery500
  },
  flatButton: {
    textColor: blueValery500
  },
  menuItem: {
    selectedTextColor: blueValery500
  },
  tabs: {
    backgroundColor: blueValery500,
    textColor: fade(white, 0.7),
    selectedTextColor: white
  },
  inkBar: {
    backgroundColor: white,
  },
  raisedButton: {
    color: blueValery300,
    textColor: white,
    disabledColor: darken(blueValery300, 0.1),
    disabledTextColor: fade(white, 0.3)
  },
  textField: {
    textColor: black,
    floatingLabelColor: fade(black, 0.42),
    hintColor: blueValery300,
    focusColor: blueValery300,
    borderColor: blueValery300
  },
  typography: {
    fontColor: blueValery300
  }
}
