import * as React from 'react'
import { PieChart, Pie, Cell } from 'recharts'
import _groupBy from 'lodash/groupBy'

import * as utils from './utils'

export default ({
  data, width = 600, height = 300, ...props
}) => (
  <PieChart width={width} height={height}>
    <Pie
      dataKey="value"
      data={transformData(data)}
      cx={300}
      cy={200}
      labelLine={false}
      label={renderCustomizedLabel}
      outerRadius={80}
      fill={utils.getRandomColor()}
      {...props}
    >
      {data.map((it, idx) => <Cell key={idx} ill={utils.getRandomColor()} />)}
    </Pie>
  </PieChart>
)

function transformData(data) {
  const grouped = _groupBy(data, 'codigo')
  const result = Object.keys(grouped).map(code => ({ name: code, value: grouped[code].reduce((acc, item) => item.receitaLiquida + acc, 0) }))
  const total = result.reduce((acc, it) => it.value + acc, 0)
  return result.map(it => ({ ...it, value: ((it.value * 100) / total) }))
}

const RADIAN = Math.PI / 180
const renderCustomizedLabel = ({
 cx, cy, midAngle, innerRadius, outerRadius, percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}
