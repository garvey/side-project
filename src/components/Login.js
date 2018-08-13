import React, { Component } from 'react';
import {
  FormGroup,
  Input,
  Form,
  Col,
  Label,
  Button,
  Container,
  Row,
  FormText,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Footer
} from 'reactstrap';
import { Link } from 'react-router-dom';
import fire, { googleProvider } from '../config/Fire';
import FaGoogle from 'react-icons/lib/fa/google';
import Fans from '../images/fans.svg';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.googlesignin = this.googlesignin.bind(this);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };

    this.state = {
      email: '',
      password: '',
      user: null
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  login(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
      });
  }

  signup(e) {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        console.log(error);
      });
  }

  googlesignin(e) {
    e.preventDefault();
    fire
      .auth()
      .signInWithPopup(googleProvider)
      .then(result => {
        console.log('user data: ', result);
        const user = result.user.displayName;
        this.setState({
          user
        });
      });
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Navbar light expand="md">
            <NavbarBrand href="/">Cup March</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">
                    GitHub
                  </NavLink>
                </NavItem>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Options
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>Option 1</DropdownItem>
                    <DropdownItem>Option 2</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Reset</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </Nav>
            </Collapse>
          </Navbar>
          <Row className="welcome">
            <Col xs={12}>
              <h1 className="text-center">
                Show your Football knowledge by predicting the correct outcome
              </h1>
            </Col>
            <Col md={{ size: 5, offset: 1 }}>
              this is a brief overview <Button color="primary">Sign Up</Button>
            </Col>
            <Col md={5}>
              <img alt="goalkeeper" src={Fans} />
            </Col>
          </Row>
        </Container>
        <Container Footer>
          <Row>
            <Col>Cup March</Col>
            <Col>About</Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <Col
              className="login p-5 mt-5"
              md={{ size: 8, offset: 2 }}
              lg={{ size: 6, offset: 3 }}
            >
              <h1 className="text-center pb-4">Cup March</h1>
              <Form>
                <FormGroup>
                  <Label for="Email">Email</Label>
                  <Input
                    value={this.state.email}
                    onChange={this.handleChange}
                    type="email"
                    name="email"
                    id="Email"
                    placeholder="Enter your email"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="Password">Password</Label>
                  <Input
                    value={this.state.password}
                    onChange={this.handleChange}
                    type="password"
                    name="password"
                    id="Password"
                    placeholder="password"
                  />
                </FormGroup>
                <Button
                  type="submit"
                  onClick={this.login}
                  className="btn btn-primary"
                >
                  Login
                </Button>
                <span> or </span>
                <Button onClick={this.googlesignin} className="btn btn-success">
                  Login with google <FaGoogle />
                </Button>
                <Row className="pt-4">
                  <Col>
                    <FormText color="muted">Don't have an account?</FormText>
                    <Button onClick={this.signup} className="btn btn-success">
                      signup
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
