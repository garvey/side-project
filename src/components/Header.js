import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';
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
            <Link to="/">CupMarch</Link>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/settings">Settings</Link>
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
