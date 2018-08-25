import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Row, Col, Label, Button } from 'reactstrap';
import HeadToHead from './games/HeadToHead';
import Predictions from './games/Predictions';

export default class Settings extends Component {
  render() {
    return (
      <div>
        <h1>Settings</h1>
      </div>
    );
  }
}
