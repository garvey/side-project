import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Row, Col, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
  render() {
    return (
      <Col xs={2} className="sidebar">
        <div className="h-100">
          <nav>
            <ul>
              <li>
                <Link to="/">Homepage</Link>
              </li>
              <li>
                <Link to="/games">Games</Link>
              </li>
              <li>
                <Link to="/competition">competition</Link>
              </li>
            </ul>
          </nav>

          <h4>My Competitions</h4>
          <nav>
            <ul>
              <li>MacDara</li>
              <li>Charity</li>
            </ul>
          </nav>

          <div className="align-baseline">
            <h4>My Account</h4>
            <nav>
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Trophy Cabinet</li>
                <li>Create Competition</li>
              </ul>
            </nav>
          </div>

          <div className="account">
            <div className="avatar small" />
            Rocky Balboa<br />
            W2 L0 GF6 GA2
          </div>
        </div>
      </Col>
    );
  }
}
