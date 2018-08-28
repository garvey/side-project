import React, { Component } from 'react';
import { Row, Col, NavItem, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';

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

    console.log(name);
  } else {
    // No user is signed in.
    console.log('There is no logged in user');
  }
});

export default class SideBar extends Component {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-content">
          <Nav vertical>
            <NavItem>
              <Link to="/app/games">Games</Link>
            </NavItem>
            <NavItem>
              <Link to="/app/competition">competition</Link>
            </NavItem>
            <NavItem>
              <Link to="/app/list">Create Tournament</Link>
            </NavItem>
          </Nav>

          <div className="heading">My Competitions</div>
          <nav>
            <ul>
              <li>MacDara</li>
              <li>Charity</li>
            </ul>
          </nav>

          <Row className="account p-3 align-baseline">
            <Col xs={3}>
              <Link to="/app/profile">
                {photo ? (
                  <img className="avatar small" src={photo} alt="user" />
                ) : (
                  <img
                    className="avatar small"
                    src="https://firebasestorage.googleapis.com/v0/b/cupmarch-ebeb4.appspot.com/o/crests%2FLiverpool_crest.png?alt=media&token=08f215a6-dca2-46ef-8e6c-4989209b9b7a"
                    alt="user"
                  />
                )}
              </Link>
            </Col>
            <Col xs={9}>
              <small>
                {name ? name : email}
                <br />
                W2 L0 GF6 GA2
              </small>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
