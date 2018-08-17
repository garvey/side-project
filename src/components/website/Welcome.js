import React, { Component } from 'react';
import { Row, Col, Card, Button, CardTitle, CardText } from 'reactstrap';
import Fans from '../../images/fans.svg';

export default class Welcome extends Component {
  render() {
    return (
      <Row className="welcome h-100">
        <Col xs={12} md={{ size: 8, offset: 2 }}>
          <h1 className="text-center">
            Knockout head to head football prediction game
          </h1>
        </Col>
        <Col md={{ size: 5, offset: 1 }} className="mt-auto mb-auto">
          <p>
            Play head to head in a straight knockout competition. Score goals by
            correctly guessing the result of football games. The player with the
            most goals advances to the next round.
          </p>

          <Button color="primary">Create a CupMarch Competiton</Button>
        </Col>
        <Col md={5} className="d-none d-sm-block">
          <img alt="goalkeeper" src={Fans} />
        </Col>
      </Row>
    );
  }
}
