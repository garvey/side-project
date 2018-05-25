import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Row, Col, Label, Button } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import Profile from './Profile';
import Competition from './Competition';

const Main = () => (
  <Col xs={10}>
    <main>
      <Switch>
        <Route exact path="/" component={Profile} />
        <Route path="/competition" component={Competition} />
      </Switch>
    </main>
  </Col>
);

export default Main;
