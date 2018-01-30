import * as React from 'react'
import { Flex } from 'grid-styled'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'
import _uniq from 'lodash/uniq'
import _pick from 'lodash/pick'
import _sortBy from 'lodash/sortBy'
import _groupBy from 'lodash/groupBy'
import moment from 'moment/moment'
import 'twix'

import * as utils from './utils'

export default ({
  data, width = 600, height = 300, ...props
}) => {
  const { tdata, userCodes } = transformData(data)
  return (
    <Flex>
      <BarChart
        width={width}
        height={height}
        data={tdata}
        {...props}
      >
        <XAxis dataKey="refmes" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        {userCodes.map(code => (
          <Bar key={code} dataKey={code} fill={utils.getRandomColor()} />
        ))}
      </BarChart>
    </Flex>
  )
}

function transformData(data) {
  const resumed = data.map(item => _pick(item, ['codigo', 'usuario', 'refmes', 'receitaLiquida']))
  const grouped = _groupBy(resumed, 'refmes')
  const periods = _sortBy(Object.keys(grouped).map(date => moment(date)))
  const min = periods[0]
  const max = periods[periods.length - 1]
  const itr = moment.twix(min, max).iterate('months')
  const tdata = []
  while (itr.hasNext()) {
    const refmes = itr.next().format('YYYY-MM')
    const users = grouped[refmes]
    const usersEarnings = users.reduce((memo, user) => ({ ...memo, [user.codigo]: user.receitaLiquida }), {})
    tdata.push({ refmes, ...usersEarnings })
  }
  return {
    grouped,
    userCodes: _uniq(resumed.map(item => item.codigo)),
    tdata,
  }
}
