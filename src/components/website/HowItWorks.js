import React, { Component } from 'react';
import { Row, Col, Card, Container, CardTitle, CardText } from 'reactstrap';
import Goalkeeper from '../../images/goalkeeper.svg';
import Glory from '../../images/glory.svg';
import Create from '../../images/create.svg';
import Invite from '../../images/invite.svg';

export default class HowItWorks extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="how-it-works">
          <Col sm={6} className="text-center mt-auto mb-auto">
            <h3>Create a Competition</h3>
            <p>Easily setup a CupMarch knockout competition</p>
          </Col>
          <Col sm={6} className="create-competition">
            <img className="img-fluid" src={Create} alt="Create compition" />
          </Col>

          <Col sm={6} className="friends">
            <img className="img-fluid" src={Invite} alt="INvite your friends" />
          </Col>
          <Col sm={6} className="text-center mt-auto mb-auto">
            <h3>Invite your friends</h3>
            <p>
              Use email or social media to invite others to join your
              competition
            </p>
          </Col>

          <Col sm={6} className="text-center mt-auto mb-auto">
            <h3>Predict weekly football fixtures</h3>
            <p>Go head to head to see who advances to the next round</p>
          </Col>
          <Col sm={6} className="predict-fixtures">
            <img className="img-fluid" src={Goalkeeper} alt="goalkeeper" />
          </Col>

          <Col sm={6} className="glory">
            <img className="img-fluid" src={Glory} alt="celebration" />
          </Col>
          <Col sm={6} className="text-center mt-auto mb-auto">
            <h3>Celebrate</h3>
            <p>The last player standing wins!</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
