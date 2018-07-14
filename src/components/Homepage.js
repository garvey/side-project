import React, { Component } from 'react';
import { Container, Row, Col, Label, Button } from 'reactstrap';
import fire from '../config/Fire';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    fire.auth().signOut();
  }
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <h3>Your Upcoming fixtures</h3>
            <div className="avatar small" /> Ivan Drago
            <Button onClick={this.logout}>Log the hell out!</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
