import * as React from 'react'

type ReportProps = {
  name: string,
  component: React.ComponentType,
  render: (props: {}) => React.ElementType,
}

export default class Reports extends React.Component {
    static Report = class extends React.Component<ReportProps> {
      render() {
        return this.props.children
      }
    }

    render() {
      const { children, match, ui: { activeTab } } = this.props
      const rptNames = React.Children.map(children, child => child.props.name)
      return (
        <div>
          <AppBar></AppBar>
          <Switch>
            <Route path={`${match.url}/relatorio`} component={Reports} />
          </Switch>
        </div>
      )

    }
}
