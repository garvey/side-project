import React, { Component } from 'react';
import {
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Navbar,
  Nav,
  NavItem,
  NavLink,
  Container,
  Modal,
  ModalBody,
  ModalHeader
} from 'reactstrap';
import Login from '../Login';
import SignIn from '../SignIn';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      modal: false
    };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  toggleModal() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
    return (
      <div>
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

                <NavItem>
                  <NavLink onClick={this.toggleModal}>Login</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>

        <Modal
          isOpen={this.state.modal}
          toggle={this.toggleModal}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggleModal}>Login to CupMarch</ModalHeader>
          <ModalBody>
            <SignIn />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}
