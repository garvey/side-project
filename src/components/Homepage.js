import React, { Component } from 'react';
import { Container, Row, Col, Label, Button } from 'reactstrap';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <h3>Your Upcoming fixtures</h3>
            <div className="avatar small" /> Ivan Drago
          </Col>
        </Row>
      </Container>
    );
  }
}
