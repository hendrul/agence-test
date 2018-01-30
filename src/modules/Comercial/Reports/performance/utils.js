import _groupBy from 'lodash/groupBy'
import _sortBy from 'lodash/sortBy'
import _pick from 'lodash/pick'
import _uniq from 'lodash/uniq'
import moment from 'moment'
import 'twix'
import * as Color from 'material-ui/styles/colors'

export function getRandomColor() {
  const colors = Object.keys(Color).filter(c => /\w+500/.test(c)).map(c => Color[c])
  return colors[Math.floor(Math.random() * colors.length)]
}
