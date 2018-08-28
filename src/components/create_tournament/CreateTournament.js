/*
import React, { Component } from 'react';

import {
  Container,
  Row,
  Col,
  Input,
  Button,
  Form,
  FormGroup,
  Label,
  InputGroupAddon,
  InputGroup
} from 'reactstrap';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import { Link } from 'react-router-dom';
import { tournaments } from '../../config/Fire';
import _ from 'lodash';

export default class CreateTournament extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      public: 'public',
      time: '',
      buyIn: '',
      gameweek: 'gameweek 1'
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
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
      [e.target.name]: e.target.value,
      [e.target.buyIn]: e.target.value
    });
    console.log(e.target.value);
  }

  handleChange(e) {
    this.setState({
      //public: e.target.value,
      //gameweek: e.target.gameweek
      [e.target.gameweek]: e.target.value
    });
    console.log(e.target.gameweek);
  }

  onHandleSubmit(e) {
    e.preventDefault();
    const tournament = {
      name: this.state.name,
      time: Date.now(),
      public: this.state.public,
      buyIn: this.state.buyIn,
      gamweek: this.state.gameweek
    };
    tournaments.push(tournament);
    this.setState({
      name: '',
      public: '',
      buyIn: '',
      gameweek: '',
      time: Date.now()
    });
    alert('Thanks for the submission!');
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={12}>
            <h1>Create Tournament</h1>
            <p>This is a blurb about setting up a tournament</p>

            <Form onSubmit={this.onHandleSubmit}>
              <FormGroup>
                <Label>Tournament name</Label>
                <Input
                  value={this.state.name}
                  type="text"
                  name="name"
                  placeholder="add name"
                  onChange={this.onInputChange}
                  ref="name"
                />
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect">Private or public tournament</Label>

                <Input
                  type="select"
                  value={this.state.value}
                  onChange={this.handleChange}
                  name="public"
                  ref="public"
                >
                  <option value="private">Private</option>
                  <option value="public">Public</option>
                </Input>
                {this.state.public === 'public' ? (
                  <p className="text-muted">
                    Public Meaning - Fusce dapibus, tellus ac cursus commodo,
                    tortor mauris nibh.
                  </p>
                ) : (
                  <p className="text-muted">
                    Private meaning - Fusce dapibus, tellus ac cursus commodo,
                    tortor mauris nibh.
                  </p>
                )}
              </FormGroup>

              <FormGroup>
                <Label>Buy in</Label>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">€</InputGroupAddon>
                  <Input
                    value={this.state.buyIn}
                    type="text"
                    name="buyIn"
                    placeholder="add buy in"
                    onChange={this.onInputChange}
                    ref="buyIn"
                  />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>
              </FormGroup>

              <FormGroup>
                <Label for="exampleSelect">
                  When does your tournament start?
                </Label>

                <Input
                  type="select"
                  value={this.state.gameweek}
                  onChange={this.handleChange}
                  name="gameweek"
                  ref="gameweek"
                >
                  <option value="gameweek-1">Gameweek 1</option>
                  <option value="gameweek-2">Gameweek 2</option>
                </Input>
              </FormGroup>

              <Button>Submit</Button>
            </Form>

            <p>Tournaments LISTED HERE</p>
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
*/
