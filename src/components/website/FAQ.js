import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import ScrollableAnchor from 'react-scrollable-anchor';

export default class FAQ extends Component {
  render() {
    return (
      <Container id="FAQ" className="pt-5 pb-5">
        <Row className="FAQ">
          <Col xs={12} className="pb-3">
            <h1>FAQ</h1>
          </Col>
        </Row>

        <Row className="questions">
          <Col xs={12}>
            <h4 className="pb-4">Question 1</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col xs={12} className="pb-4">
            <h4>Question 2</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col xs={12} className="pb-4">
            <h4>Question 3</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
          <Col xs={12} className="pb-4">
            <h4>Question 4</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Col>
        </Row>
      </Container>
    );
  }
}
