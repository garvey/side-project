import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  Container,
  Row,
  Col,
  Label,
  Button,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Switch, Route, Link } from 'react-router-dom';

import fire from '../config/Fire';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  logout() {
    fire.auth().signOut();
  }

  render() {
    return (
      <div>
        <Navbar className="header fixed-top" color="faded" expand="md" light>
          <NavbarBrand className="mr-auto">
            <Link to="/overview">CupMarch</Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/profile">Profile</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/" onClick={this.logout}>
                  Logout
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
