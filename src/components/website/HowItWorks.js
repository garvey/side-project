import React, { Component } from 'react';
import { Row, Col, Card, Container, CardTitle, CardText } from 'reactstrap';
import Goalkeeper from '../../images/goalkeeper.svg';
import Glory from '../../images/glory.svg';
import Create from '../../images/create.svg';
import Invite from '../../images/invite.svg';

export default class HowItWorks extends Component {
  render() {
    return (
      <Container className="h-100" fluid>
        <Row className="how-it-works">
          <Col xs={6} className="text-center mt-auto mb-auto">
            <h3>Create a Competition</h3>
            <p>Easily setup a CupMarch knockout competition</p>
          </Col>
          <Col xs={6} className="create-competition">
            <img className="img-fluid" src={Create} alt="Create compition" />
          </Col>

          <Col xs={6} className="friends">
            <img className="img-fluid" src={Invite} alt="INvite your friends" />
          </Col>
          <Col xs={6} className="text-center mt-auto mb-auto">
            <h3>Invite your friends</h3>
            <p>
              Use email or social media to invite others to join your
              competition
            </p>
          </Col>

          <Col xs={6} className="text-center mt-auto mb-auto">
            <h3>Predict weekly football fixtures</h3>
            <p>Go head to head to see who advances to the next round</p>
          </Col>
          <Col xs={6} className="predict-fixtures">
            <img className="img-fluid" src={Goalkeeper} alt="goalkeeper" />
          </Col>

          <Col xs={6} className="glory">
            <img className="img-fluid" src={Glory} alt="celebration" />
          </Col>
          <Col xs={6} className="text-center mt-auto mb-auto">
            <h3>Glory</h3>
            <p>There can only be one winner</p>
          </Col>
        </Row>
      </Container>
    );
  }
}