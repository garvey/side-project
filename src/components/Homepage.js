import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap';
import Upcoming from './homepage/Upcoming';
import { Link } from 'react-router-dom';

export default class Login extends Component {
  render() {
    return (
      <div>
        <h2>Upcoming Fixtures</h2>
        <Row className="pt-2">
          <Col xs={12} md={6}>
            <Upcoming opponent="Ivan Drago" cup="MacDara Cup" />
          </Col>

          <Col xs={12} md={6}>
            <Upcoming opponent="John McClean" cup="Charity Cup" />
          </Col>
        </Row>
        <Row className="pt-2 float-right">
          <Col>
            <Link to="/newCompetition">Create competiton</Link>
          </Col>
        </Row>
      </div>
    );
  }
}
