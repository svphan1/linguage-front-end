import React, { Component } from 'react';
import DashNavBar from './DashNavBar';
import ProfileCard from './ProfileCard/ProfileCard';
import Heading from './Heading/Heading';

export default class Dashboard extends Component {
  render() {
    const {} = this.props
    return (
      <React.Fragment>
        <DashNavBar />
        <Heading />
        <ProfileCard />
      </React.Fragment>
    )
  }
}
