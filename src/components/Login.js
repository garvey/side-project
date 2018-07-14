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
import { Link } from 'react-router-dom';
import fire from '../config/Fire';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);

    this.state = {
      email: '',
      password: ''
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

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
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
              <Button onClick={this.signup} className="btn btn-success">
                signup
              </Button>
              <FormText color="muted">
                Simple login to test login and signup.
              </FormText>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
