import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Row, Col, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class HeadToHead extends Component {
  render() {
    return (
      <Row className="head-to-head mt-4 mb-4">
        <Col>
          <h1>MacDara Cup</h1>
          <h4>SemiFinal</h4>
          <h3>8 players marching on</h3>
          <Link to="/competition">view table</Link>
        </Col>

        <Col className="text-left">
          <div className="avatar" />
          Player 2
        </Col>
      </Row>
    );
  }
}
