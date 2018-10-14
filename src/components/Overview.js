import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Upcoming from './homepage/Upcoming';
import { Link } from 'react-router-dom';

export default class Overview extends Component {
  render() {
    return (
      <div>
        <h2>Upcoming Fixture</h2>
        <Row className="pt-2">
          <Col xs={12}>
            <Upcoming opponent="Ivan Drago" cup="MacDara Cup" round="last 16" />
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
