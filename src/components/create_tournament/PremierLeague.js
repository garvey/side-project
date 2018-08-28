import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import { Link } from 'react-router-dom';

export default class PremierLeague extends Component {
  render() {
    return (
      <Container className="premier-league">
        <Row>
          <Col xs={12}>
            <img
              src="https://cdn.shopify.com/s/files/1/1888/7339/files/desktop-premier-league_2x_5685372c-c877-48c3-8c1e-cf7cd147ac74_160x160@2x.png?v=1507292192"
              alt="Premier League crest"
            />
            <p>You choose the premier league. </p>
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
