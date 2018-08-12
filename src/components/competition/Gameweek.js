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

export default class Gameweek extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <Row>
            <Col>
              <div className="avatar small" />
            </Col>
            <Col>
              <CardTitle className="align-middle">
                {this.props.opponent1}
              </CardTitle>
            </Col>
            <Col>{this.props.score1}</Col>
          </Row>
        </CardBody>

        <CardBody>
          <Row>
            <Col>
              <div className="avatar small" />
            </Col>
            <Col>
              <CardTitle>{this.props.opponent2}</CardTitle>
            </Col>
            <Col>{this.props.score2}</Col>
          </Row>
        </CardBody>
      </Card>
    );
  }
}
