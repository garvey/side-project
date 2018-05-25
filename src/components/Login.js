import React, { Component } from 'react';
import { Container, Row, Col, Label, Button } from 'reactstrap';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12} md={{ size: 6, offset: 3 }} className="my-auto mx-auto">
            <h1>THIS IS THE LOGIN</h1>
          </Col>
        </Row>
      </Container>
    );
  }
}
