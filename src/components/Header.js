import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Row, Col, Label, Button } from 'reactstrap';
import { Switch, Route, Link } from 'react-router-dom';

import fire from '../config/Fire';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }
  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <Row className="header">
        <Col xs={6}>
          <h3 className="p-2">CupMarch</h3>
        </Col>
        <Col xs={6} className="text-right">
          <a className="p-2" onClick={this.logout}>
            Log out >
          </a>
        </Col>
      </Row>
    );
  }
}
