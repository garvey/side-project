import React, { Component } from 'react';

import { Container, Row, Col, Input, Button, Form } from 'reactstrap';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import { Link } from 'react-router-dom';
import { tournaments } from '../../config/Fire';
import _ from 'lodash';

export default class CreateTournament extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      time: ''
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
  }

  // lifecycle
  componentDidMount() {
    tournaments.on('value', snapshot => {
      this.setState({
        tournaments: snapshot.val()
      });
    });
  }

  // RENDER Tournaments

  renderTournaments() {
    return _.map(this.state.tournaments, (tournament, key) => {
      return (
        <div key={key}>
          <h3>{tournament.name}</h3>
          <p>{tournament.id}</p>
        </div>
      );
    });
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onHandleSubmit(e) {
    e.preventDefault();
    const tournament = {
      name: this.state.name,
      time: Date.now()
    };
    tournaments.push(tournament);
    this.setState({
      name: '',
      time: Date.now()
    });
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <h1>Create Tournament</h1>
            <p>This is a blurb about setting up a tournament</p>

            <Form onSubmit={this.onHandleSubmit}>
              <Input
                value={this.state.name}
                type="text"
                name="name"
                placeholder="add name"
                onChange={this.onInputChange}
                ref="name"
              />

              <Button>Submit</Button>
            </Form>

            <p>TOURNAMENTS LISTED HERE</p>
            {this.renderTournaments()}
          </Col>
        </Row>

        <Row>
          <Col xs={12} className="text-right">
            <Link to="/selectLeague">
              Let's begin <FaAngleRight />
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}
