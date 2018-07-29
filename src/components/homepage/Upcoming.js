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
              <CardSubtitle>{this.props.cup}</CardSubtitle>
            </Col>
          </Row>
        </CardBody>
        <img
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
          <Link to="/games">Your Predictions</Link>
          <Link className="float-right" to="/competition">
            Competition
          </Link>
        </CardBody>
      </Card>
    );
  }
}
