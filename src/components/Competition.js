import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Row, Col, Label, Button } from 'reactstrap';

export default class Competition extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="text-center">
            <Row>
              <Col xs={5} className="align-right">
                <div className="avatar small" />
                Rocky
              </Col>
              <Col xs={2}>v</Col>
              <Col xs={5}>
                <div className="avatar small" />
                Clubber
              </Col>
            </Row>
          </Col>
          <Col className="text-center">
            <Row>
              <Col xs={5} className="align-right">
                <div className="avatar small" />
                Apollo
              </Col>
              <Col xs={2}>v</Col>
              <Col xs={5}>
                <div className="avatar small" />
                Thunderlips
              </Col>
            </Row>
          </Col>
          <Col className="text-center">
            <Row>
              <Col xs={5} className="align-right">
                <div className="avatar small" />
                Tommy
              </Col>
              <Col xs={2}>v</Col>
              <Col xs={5}>
                <div className="avatar small" />
                Ivan
              </Col>
            </Row>
          </Col>
          <Col className="text-center">
            <Row>
              <Col>
                <div className="avatar small" />
                Mason
              </Col>
              <Col>v</Col>
              <Col>
                <div className="avatar small" />
                Micky
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">SEMI FINAL</Col>
          <Col className="text-center">SEMI FINAL</Col>
        </Row>
        <Row>
          <Col className="text-center">FINAL</Col>
        </Row>
      </div>
    );
  }
}
