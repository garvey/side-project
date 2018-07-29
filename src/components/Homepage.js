import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Label,
  Button,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  CardLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Upcoming from './homepage/Upcoming';

export default class Login extends Component {
  render() {
    return (
      <Row className="pt-2">
        <Col xs={12} md={6}>
          <Upcoming opponent="Ivan Drago" cup="MacDara Cup" />
        </Col>

        <Col xs={12} md={6}>
          <Upcoming opponent="John McClean" cup="Charity Cup" />
        </Col>
      </Row>
    );
  }
}
