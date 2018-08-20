import React, { Component } from 'react';
import { Row, Col, NavItem, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-content">
          <Nav vertical>
            <NavItem>
              <Link to="/overview">Overview</Link>
            </NavItem>
            <NavItem>
              <Link to="/games">Games</Link>
            </NavItem>
            <NavItem>
              <Link to="/competition">competition</Link>
            </NavItem>
          </Nav>

          <div className="heading">My Competitions</div>
          <nav>
            <ul>
              <li>MacDara</li>
              <li>Charity</li>
            </ul>
          </nav>

          <div className="align-baseline">
            <div className="heading">My Account</div>
            <nav>
              <ul>
                <li>Profile</li>
                <li>Settings</li>
                <li>Trophy Cabinet</li>
                <li>Create Competition</li>
              </ul>
            </nav>
          </div>
          <Row className="account p-3">
            <Col xs={3}>
              <div className="avatar small" />
            </Col>
            <Col xs={9}>
              <small>
                Rocky Balboa
                <br />
                W2 L0 GF6 GA2
              </small>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
