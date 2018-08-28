import React, { Component } from 'react';

import { Container, Row, Col } from 'reactstrap';
import FaAngleLeft from 'react-icons/lib/fa/angle-left';
import { Link } from 'react-router-dom';

export default class SelectLeague extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <h1>Select League</h1>
            <p>This is a blurb about selecting a league</p>
          </Col>
        </Row>
        <Row>
          <Col className="premier-league text-center p-4">
            <Link to="/premierLeague">
              <img
                src="https://cdn.shopify.com/s/files/1/1888/7339/files/desktop-premier-league_2x_5685372c-c877-48c3-8c1e-cf7cd147ac74_160x160@2x.png?v=1507292192"
                alt="Premier League crest"
              />
            </Link>
          </Col>

          <Col className="la-liga p-4 text-center">
            <Link to="/laliga">
              <img
                src="https://cdn.shopify.com/s/files/1/1888/7339/files/desktop-laliga_2x_c643924a-b612-46b8-9820-9cac6b610258_160x160@2x.png?v=1507292228"
                alt="La Liga Crest"
              />
            </Link>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col xs={12}>
            <Link to="/createTournament">
              <FaAngleLeft /> Back
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
