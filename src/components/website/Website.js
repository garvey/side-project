import React, { Component } from 'react';
import Welcome from './Welcome';
import NavBar from './NavBar';
import HowItWorks from './HowItWorks';
import Footer from './Footer';
import FAQ from './FAQ';
import Login from '../Login';

export default class Website extends Component {
  render() {
    return (
      <div className="h-100">
        <NavBar />
        <Login />
        <Welcome />
        <HowItWorks />
        <FAQ />
        {/* <FindCompetition /> */}
        <Footer />
      </div>
    );
  }
}
