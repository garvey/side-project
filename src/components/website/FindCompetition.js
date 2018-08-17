import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';

export default class FindCompetition extends Component {
  render() {
    return (
      <Container>
        <Row className="find-competition h-100">
          <Col xs={12}>
            <h1>Find a CupMarch competition</h1>
          </Col>

          <Col xs={12}>Search for some tings.</Col>
        </Row>
      </Container>
    );
  }
}
