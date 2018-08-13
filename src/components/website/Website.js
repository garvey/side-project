import React, { Component } from 'react';
import Welcome from './Welcome';
import NavBar from './NavBar';
import HowItWorks from './HowItWorks';
import Footer from './Footer';

export default class Website extends Component {
  render() {
    return (
      <div className="h-100">
        <NavBar />
        <Welcome />
        <HowItWorks />
        <Footer />
      </div>
    );
  }
}
