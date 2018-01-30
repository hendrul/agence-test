/* @flow */
import * as React from 'react'
import { connect } from 'react-redux'
import { Flex } from 'grid-styled'
import PerformanceReportIcon from 'react-icons/lib/fa/dashboard'

import { VSpace1, VSpace2, VSpace3 } from 'shared/components/styled-spacing'
import Paper from 'shared/components/styled-material-ui/Paper'
import { CurrencyCell } from 'shared/components/styled-react-table'
import dateFormat from 'shared/utils/dateformat'
import PerformanceHeader from './report-header'
import PerformanceBarChart from './barchart'
import PerformancePieChart from './piechart'
import PerformanceTables from './performance-tables'

dateFormat.i18n = dateFormat.locales.es
const {
  '#reportFetch': reportFetch,
  $getConsultors, $getPerformance,
} = global.appActions.comercial.reports.performance

const mapStateToProps = state => ({
  performance: $getPerformance(state.app).data,
  consultors: $getConsultors(state.app).data,
})

class PerformanceReport extends React.PureComponent {
  static Icon = PerformanceReportIcon

  onGenerateReport = ({ consultors, since, until }) => {
    reportFetch(consultors, since, until)
  }

  render() {
    const {
      performance, consultors,
    } = this.props
    return (
      <Flex column>
        <PerformanceHeader data={{ consultors }} onGenerateReport={this.onGenerateReport} />
        <VSpace3 />
        {performance.length && (
          <Flex column>
            <Flex justify="center">
              <Paper>
                <PerformanceBarChart width={600} height={600} data={performance} />
              </Paper>
              <Paper>
                <PerformancePieChart width={600} height={600} data={performance} />
              </Paper>
            </Flex>
            <VSpace2 />
            <Paper>
              <PerformanceTables data={performance} />
            </Paper>
          </Flex>
        )}
      </Flex>
    )
  }
}

export default connect(mapStateToProps)(PerformanceReport)
