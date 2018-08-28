import React from 'react';
import { Row, Col } from 'reactstrap';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import Main from '../components/Main';

class DefaultLayout extends React.Component {
  render() {
    return (
      <Container-fluid>
        <Header className="header" />

        <Row className="h-100">
          <Col xs={2}>
            <SideBar />
          </Col>
          <Col className="main-content">
            <Main />
          </Col>
        </Row>
      </Container-fluid>
    );
  }
}

export default DefaultLayout;
