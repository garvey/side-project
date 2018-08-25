import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Row, Col, Label, Button } from 'reactstrap';
import Gameweek from './competition/Gameweek';

export default class Competition extends Component {
  render() {
    return (
      <div>
        {/* SIDE 1 */}
        <Row>
          <Col>
            <Gameweek
              opponent1="Rocky"
              opponent2="Clubber"
              score1="3"
              score2="1"
            />
          </Col>
          <Col>
            <Gameweek
              opponent1="Rocky"
              opponent2="Clubber"
              score1="3"
              score2="1"
            />
          </Col>
          <Col>
            <Gameweek
              opponent1="Rocky"
              opponent2="Clubber"
              score1="3"
              score2="1"
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
            <Gameweek
              opponent1="Rocky"
              opponent2="Clubber"
              score1="3"
              score2="1"
            />
          </Col>

          <Col xs={12} md={4} className="pt-5">
            <Gameweek
              opponent1="Rocky"
              opponent2="Clubber"
              score1="3"
              score2="1"
            />
          </Col>
        </Row>
        {/* END OF SIDE 1 */}

        {/* SIDE 2 */}
        <Row>
          <Col xs={12} md={4}>
            <Gameweek
              opponent1="Rocky"
              opponent2="Clubber"
              score1="3"
              score2="1"
            />
          </Col>

          <Col xs={12} md={4} className="pt-5">
            <Gameweek
              opponent1="Rocky"
              opponent2="Clubber"
              score1="3"
              score2="1"
            />
          </Col>

          <Col xs={12} md={4}>
            <Gameweek
              opponent1="Rocky"
              opponent2="Clubber"
              score1="3"
              score2="1"
            />
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={4}>
            <Gameweek
              opponent1="Rocky"
              opponent2="Clubber"
              score1="3"
              score2="1"
            />
          </Col>

          <Col xs={12} md={4} className="pt-5">
            <Gameweek
              opponent1="Rocky"
              opponent2="Clubber"
              score1="3"
              score2="1"
            />
          </Col>
        </Row>
        {/* END OF SIDE 2 */}
      </div>
    );
  }
}
