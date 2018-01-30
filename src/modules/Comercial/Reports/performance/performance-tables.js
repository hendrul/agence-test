/* @flow */
import * as React from 'react'
import { Flex } from 'grid-styled'
import ReactTable from 'react-table'
import { blue500, red500 } from 'material-ui/styles/colors'
import _sumBy from 'lodash/sumBy'
import _groupBy from 'lodash/groupBy'

import { VSpace3 } from 'shared/components/styled-spacing'
import { CurrencyCell } from 'shared/components/styled-react-table'
import dateFormat from 'shared/utils/dateformat'

type ConsultorPerformance = {
  codigo: string,
  usuario: string,
  refmes: string,
  receitaLiquida: string,
  custoFixo: string,
  comissao: string,
  lucro: string,
}
type PerformanceTableProps = {
  data: Array<ConsultorPerformance>,
}

export default class PerformanceTable extends React.PureComponent {
  render() {
    const { data } = this.props
    const grouped = _groupBy(data, 'usuario')
    return (
      <div>
        {Object.values(grouped).map((usuarioData, i) => (
          <div key={i}>
            <ReactTable
              data={usuarioData}
              columns={[
                {
                  Header: (
                    <Flex>
                      <strong>{usuarioData[0].usuario}</strong>
                    </Flex>
                  ),
                  columns: [
                    {
                      id: 'refmes',
                      Header: 'Periodo',
                      accessor: usuario => dateFormat(new Date(usuario.refmes), "mmmm 'de' yyyy"),
                      Footer: (
                        <Flex>
                          <strong>SALDO</strong>
                        </Flex>
                      ),
                    },
                    {
                      id: 'receitaLiquida',
                      Header: 'Receita Liquida',
                      accessor: usuario => usuario.receitaLiquida,
                      Cell: row => (
                        <CurrencyCell>{row.value}</CurrencyCell>
                      ),
                      Footer: () => (
                        <CurrencyCell strong>
                          {_sumBy(usuarioData, 'receitaLiquida')}
                        </CurrencyCell>
                      ),
                    },
                    {
                      id: 'custoFixo',
                      Header: 'Custo Fixo',
                      accessor: usuario => usuario.custoFixo,
                      Cell: row => (
                        <CurrencyCell>{row.value}</CurrencyCell>
                      ),
                      Footer: () => (
                        <CurrencyCell strong>
                          {_sumBy(usuarioData, 'custoFixo')}
                        </CurrencyCell>
                      ),
                    },
                    {
                      id: 'comissao',
                      Header: 'Comissao',
                      accessor: usuario => usuario.comissao,
                      Cell: row => (
                        <CurrencyCell>{row.value}</CurrencyCell>
                      ),
                      Footer: () => (
                        <CurrencyCell strong>
                          {_sumBy(usuarioData, 'comissao')}
                        </CurrencyCell>
                      ),
                    },
                    {
                      id: 'lucro',
                      Header: 'Lucro',
                      accessor: usuario => usuario.lucro,
                      Cell: row => (
                        <CurrencyCell negativeColor={red500}>{row.value}</CurrencyCell>
                      ),
                      Footer: () => (
                        <CurrencyCell strong color={blue500} >
                          {_sumBy(usuarioData, 'lucro')}
                        </CurrencyCell>
                      ),
                    },
                  ],
                },
              ]}
              showPagination={false}
              pageSize={usuarioData.length}
              className="-striped -highlight align-right"
            />
            <VSpace3 />
          </div>
        ))}
      </div>
    )
  }
}
