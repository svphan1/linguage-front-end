import React, { Component } from 'react';
import DashNavBar from './DashNavBar';

export default class Dashboard extends Component {
  render() {
    const {} = this.props
    return (
      <React.Fragment>
        <DashNavBar />
      </React.Fragment>
    )
  }
}
