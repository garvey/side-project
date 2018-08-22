import React, { Component } from 'react';

import { Container, Row, Col, Label, Button } from 'reactstrap';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import { Link } from 'react-router-dom';

export default class LaLiga extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <h1>La Liga</h1>
          </Col>
        </Row>

        <Row>
          <Col>
            <Link to="/selectLeague">
              <FaAngleLeft /> Back to league selection
            </Link>
          </Col>
          <Col xs={12} className="text-right">
            <Link to="/selectLeague">
              Continue <FaAngleRight />
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
