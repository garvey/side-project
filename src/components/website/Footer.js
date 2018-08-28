import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

export default class Footer extends Component {
  render() {
    return (
      <Container className="footer" fluid>
        <Container className="pt-4 pb-4">
          <Row>
            <Col className="text-right"> Copyright &copy; 2018 CupMarch</Col>
          </Row>
        </Container>
      </Container>
    );
  }
}
