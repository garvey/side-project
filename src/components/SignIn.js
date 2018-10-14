//import './SignIn.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../actions';
import PropTypes from 'prop-types';
import { Col, Row, Button } from 'reactstrap';
import FaGoogle from 'react-icons/lib/fa/google';

class Signin extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      this.context.router.history.push('/app');
    }
  }

  render() {
    return (
      <Row>
        <Col>
          <p>Sign in to join and create cupmarch tournaments</p>
          <Button onClick={this.props.signIn}>
            <FaGoogle />
            Sign In With Google
          </Button>
        </Col>
      </Row>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(
  mapStateToProps,
  { signIn }
)(Signin);
