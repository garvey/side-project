import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Profile extends Component {
  render() {
    console.log(this.props);
    return (
      <Container>
        <Row>
          <Col md={2}>
            {this.props.auth.photoURL ? (
              <img
                className="user-image"
                src={this.props.auth.photoURL}
                alt="user"
              />
            ) : (
              <img
                className="user-image"
                src="https://firebasestorage.googleapis.com/v0/b/cupmarch-ebeb4.appspot.com/o/crests%2FLiverpool_crest.png?alt=media&token=08f215a6-dca2-46ef-8e6c-4989209b9b7a"
                alt="default user profile"
              />
            )}
          </Col>
          <Col md={10}>
            <h3 className="text-left">
              {this.props.auth.displayName
                ? this.props.auth.displayName
                : this.props.auth.email}
            </h3>
          </Col>
        </Row>

        <Row className="pt-4">
          <Col>
            <h3>Trophy Cabinet</h3>

            <p>2 titles</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(Profile);
