import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Row, Col, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class HeadToHead extends Component {
  render() {
    return (
      <Row className="head-to-head mt-4 mb-4">
        <Col xs={12} className="text-center">
          <h1>MacDara Cup</h1>
          <Link to="/competition">view table</Link>
        </Col>
        <Col className="text-center">
          <div className="avatar" />
          Player 1
        </Col>
        <Col className="text-center">
          <h4>SemiFinal</h4>
        </Col>
        <Col className="text-center">
          <div className="avatar" />
          Player 2
        </Col>
      </Row>
    );
  }
}
