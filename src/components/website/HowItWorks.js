import React, { Component } from 'react';
import { Row, Col, Card, Container, CardTitle, CardText } from 'reactstrap';

export default class HowItWorks extends Component {
  render() {
    return (
      <Container className="h-100">
        <Row>
          <Col xs={12}>
            <h1>How CupMarch works</h1>
          </Col>
          <Col>
            <Card body>
              <CardTitle>Create a Competition</CardTitle>
              <CardText>
                Setup a knockout competiton to challenge your friends football
                knowledge.
              </CardText>
            </Card>
          </Col>
          <Col>
            <Card body>
              <CardTitle>Invite your friends</CardTitle>
              <CardText>
                <p>add info here</p>
              </CardText>
            </Card>
          </Col>
          <Col>
            <Card body>
              <CardTitle>Predict weekly football fixtures</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </Card>
          </Col>
          <Col>
            <Card body>
              <CardTitle>Glory</CardTitle>
              <CardText>
                With supporting text below as a natural lead-in to additional
                content.
              </CardText>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
