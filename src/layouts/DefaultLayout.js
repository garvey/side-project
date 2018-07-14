import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Main from '../components/Main';

class DefaultLayout extends React.Component {
  render() {
    return (
      <Container>
        <Row className="header">
          <Header />
        </Row>
        <Row className="h-100">
          <SideBar />
          <Main />
        </Row>
      </Container>
    );
  }
}

export default DefaultLayout;
