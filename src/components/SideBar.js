import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Container, Row, Col, Label, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
  render() {
    return (
      <Col xs={2} className="sidebar">
        <div className="h-100">
          <h3>SIDEPROJECT</h3>
          <nav>
            <ul>
              <li>
                <Link to="/">Profile</Link>
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
      </Col>
    );
  }
}
