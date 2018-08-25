import React, { Component } from 'react';
import { Container, Row, Col, Label, Button } from 'reactstrap';

import firebase from 'firebase';

var name;
var photo;
var email;

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    console.log('This is the user: ', user);
    name = user.displayName;
    photo = user.photoURL;
    email = user.email;
  } else {
    // No user is signed in.
    console.log('There is no logged in user');
  }
});

function writeUserData(userId, name, email, imageUrl) {
  firebase
    .database()
    .ref('users/' + userId)
    .set({
      username: name,
      email: email,
      profile_picture: imageUrl
    });

  console.log('USER ID', userId);
}

export default class Profile extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={2}>
            {photo ? (
              <img className="user-image" src={photo} alt="user image" />
            ) : (
              <img
                className="user-image"
                src="https://firebasestorage.googleapis.com/v0/b/cupmarch-ebeb4.appspot.com/o/crests%2FLiverpool_crest.png?alt=media&token=08f215a6-dca2-46ef-8e6c-4989209b9b7a"
                alt="user"
              />
            )}
          </Col>
          <Col md={10}>
            <h3 className="text-left">{name ? name : email}</h3>
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
