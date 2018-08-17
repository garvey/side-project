import React, { Component } from 'react';
import {
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar className="fixed-top" light expand="md">
        <Container>
          <NavbarBrand href="/">CupMarch</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#How-it-works">How it works</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#FAQ">FAQ</NavLink>
              </NavItem>
              {/*<NavItem>
                <NavLink href="#">Find a competiton</NavLink>
              </NavItem>*/}
              <NavItem>
                <NavLink>
                  <Link to="/Login">Login</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}
