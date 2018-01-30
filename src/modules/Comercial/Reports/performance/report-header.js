/* @flow */
import * as React from 'react'
import ui from 'redux-ui'
import styled from 'styled-components'
import { Flex } from 'grid-styled'
import DatePicker from 'material-ui/DatePicker'
import SelectField from 'material-ui/SelectField'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import { AvPlayArrow as PlayIcon } from 'material-ui/svg-icons'
import MenuItem from 'material-ui/MenuItem'

import { VSpace3, HSpace3 } from 'shared/components/styled-spacing'
import Paper from 'shared/components/styled-material-ui/Paper'
import dateFormat from 'shared/utils/dateformat'
import type { Consultor } from './actions'

dateFormat.i18n = dateFormat.locales.es
const {
  '#consultorsFetch': consultorsFetch,
} = global.appActions.comercial.reports.performance

type ReportHeaderProps = {
  data: { consultors: Array<Consultor> },
  onGenerateReport: (consultorSelection: Array<Consultor>, since: Date, until: Date) => void,
  ui: {
    consultorSelection: Array<string>,
    since: Date,
    until: Date,
  }
}

@ui({
  persist: true,
  state: {
    since: new Date(new Date().setYear(new Date().getYear() - 20)),
    until: new Date(),
    consultorSelection: [],
  },
})
export default class ReportHeader extends React.Component<ReportHeaderProps> {
  render() {
    const {
      data: { consultors },
      onGenerateReport,
      ui: {
        since,
        until,
        consultorSelection,
      },
    } = this.props
    return (
      <Paper>
        <Flex justify="center">
          <PeriodPicker />
          <HSpace3 />
          <ConsultorSelector data={consultors} />
          <HSpace3 />
          <FloatingActionButton
            disabled={!consultors.length && !!since && !!until}
            onClick={() => {
              onGenerateReport({ consultors: consultorSelection, since, until })
            }}
          >
            <PlayIcon />
          </FloatingActionButton>
        </Flex>
      </Paper>
    )
  }
}

const PeriodPicker = ui()(({ updateUI, ui: { since, until } }) => {
  return (
    <Flex>
      <Flex justify="flex-start">
        <DatePicker
          autoOk
          hintText="Desde"
          container="inline"
          maxDate={new Date(until)}
          value={new Date(since)}
          formatDate={date => dateFormat(date, "mmmm 'de' yyyy")}
          onChange={(evt, newSince) => updateUI({ since: newSince })}
        />
        <HSpace3 />
        <DatePicker
          autoOk
          hintText="Hasta"
          container="inline"
          minDate={new Date(since)}
          value={new Date(until)}
          formatDate={date => dateFormat(date, "mmmm 'de' yyyy")}
          onChange={(evt, newUntil) => updateUI({ until: newUntil })}
        />
      </Flex>
    </Flex>
  )
})

type ConsultorSelectorProps = {
  data: Array<{ code: string, name: string }>,
  ui: { consultorSelection: Array<string> },
  updateUI: (mixed) => void
}

const ConsultorSelector = ui()((props: ConsultorSelectorProps) => {
  const { data, updateUI, ui: { consultorSelection } } = props
  return (
    <SelectField
      multiple
      hintText="Seleccione consultores"
      value={consultorSelection}
      onChange={(evt, idx, selection) => {
        updateUI({ consultorSelection: selection })
      }}
      onClick={() => consultorsFetch()}
    >
      {data.map(({ code, name }) => (
        <MenuItem
          key={code}
          insetChildren
          checked={consultorSelection.indexOf(code) > -1}
          value={code}
          primaryText={name}
        />
      ))}
    </SelectField>
  )
})
