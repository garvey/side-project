import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Main from '../components/Main';

class DefaultLayout extends React.Component {
  render() {
    return (
      <Container-fluid>
        <Header className="header" />

        <Row className="h-100">
          <SideBar />
          <Main />
        </Row>
      </Container-fluid>
    );
  }
}

export default DefaultLayout;
