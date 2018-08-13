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
          <Navbar className="fixed-top" light expand="md">
            <NavbarBrand href="/">Cup March</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="#how-it-works">How it works</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Find a competiton</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
          <Row className="welcome">
            <Col xs={{ size: 8, offset: 2 }}>
              <h1 className="text-center">
                Challenge your friends football knowledge by going head to head
              </h1>
            </Col>
            <Col md={{ size: 5, offset: 1 }} className="m-auto">
              <p>
                Play head to head in a straight knockout competition. The player
                with the most goals advances to the next round. Score goals by
                correctly guessing the result of football games.
              </p>
              <span className="float-left">
                <Button color="primary">Sign Up</Button>
              </span>
              <span className="float-right">
                <Button color="primary">Create Competiton</Button>
              </span>
            </Col>
            <Col md={5}>
              <img alt="goalkeeper" src={Fans} />
            </Col>
          </Row>
        </Container>
        <Container className="footer" fluid>
          <Container>
            <Row>
              <Col>2018 &copy; Cup March</Col>
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
