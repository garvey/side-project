import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Row, Col, Label, Button } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';

const Header = () => (
  <Col xs={12}>
    <h3>CupMarch</h3>
  </Col>
);

export default Header;
