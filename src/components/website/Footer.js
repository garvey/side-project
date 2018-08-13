import React, { Component } from 'react';
import { Row, Col, Container, Nav, NavItem, NavLink } from 'reactstrap';

export default class Footer extends Component {
  render() {
    return (
      <Container className="footer" fluid>
        <Container>
          <Row>
            <Col>2018 &copy; CupMarch</Col>
            <Col>
              <h4>About</h4>
              <Nav vertical>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink disabled href="#">
                    Disabled Link
                  </NavLink>
                </NavItem>
              </Nav>
            </Col>
            <Col />
          </Row>
        </Container>
      </Container>
    );
  }
}
