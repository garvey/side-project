import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  FormGroup,
  Input,
  Form,
  Col,
  Label,
  Button,
  Row,
  Alert
} from 'reactstrap';
import firebase, { googleProvider } from '../config/firebase';
import FaGoogle from 'react-icons/lib/fa/google';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.googlesignin = this.googlesignin.bind(this);

    this.state = {
      email: '',
      password: '',
      user: null,
      message: ''
    };
  }

  login(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(u => {})
      .catch(error => {
        console.log(error);
        const message = error.message;
        this.setState({
          message
        });
      });
  }

  signup(e) {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(error => {
        console.log(error);
        console.log(error.message);
        const message = error.message;
        this.setState({
          message
        });
      });
  }

  googlesignin(e) {
    e.preventDefault();
    firebase
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
          <Button
            type="submit"
            onClick={this.signup}
            className="btn btn-primary"
          >
            Sign up
          </Button>
        </Form>

        <Row className="pt-2">
          <Col>
            {this.state.message ? (
              <Alert color="info">{this.state.message} </Alert>
            ) : null}{' '}
          </Col>
        </Row>

        <Row>
          <Col className="text-right">
            <Button onClick={this.googlesignin} className="btn btn-success">
              <FaGoogle /> Login with google
            </Button>
          </Col>
        </Row>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

export default connect(mapStateToProps)(Login);
