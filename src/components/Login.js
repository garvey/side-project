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
  FormText
} from 'reactstrap';
import fire, { googleProvider } from '../config/Fire';
import FaGoogle from 'react-icons/lib/fa/google';
import Welcome from './website/Welcome';
import HowItWorks from './website/HowItWorks';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.googlesignin = this.googlesignin.bind(this);

    this.state = {
      email: '',
      password: '',
      user: null
    };
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
          <Welcome />

          <HowItWorks />
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
