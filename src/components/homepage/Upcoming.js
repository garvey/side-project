import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Upcoming extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <Row>
            <Col xs={12} md={2}>
              <div className="avatar small" />
            </Col>
            <Col xs={12} md={10}>
              <CardTitle>{this.props.opponent}</CardTitle>
              <CardSubtitle>
                <small>{this.props.cup}</small>
              </CardSubtitle>
            </Col>
          </Row>
        </CardBody>

        <CardBody>
          <Link to="/competition">Cup Fixtures</Link>
          <Link className="float-right" to="/games">
            Your Predictions
          </Link>
        </CardBody>
      </Card>
    );
  }
}
