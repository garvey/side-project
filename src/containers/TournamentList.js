import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import ShowTournament from './ShowTournament';
import Preloader from './Preloader';
import {
  Button,
  Input,
  Row,
  Col,
  Form,
  Label,
  FormGroup,
  InputGroup,
  InputGroupAddon,
  Alert
} from 'reactstrap';
import VirtualizedSelect from 'react-virtualized-select';
import 'react-select/dist/react-select.css';
import 'react-virtualized/styles.css';
import 'react-virtualized-select/styles.css';

// import TournamentForm from './TournamentForm';

class TournamentList extends Component {
  state = {
    addFormVisible: false,
    addTournamentTitle: '',
    addEntryFee: '',
    time: '',
    league: '',
    gameweek: '',
    isFundraiser: '',
    addFundraising: ''
  };

  handleInputChange = event => {
    const { name, value, selectGameweek } = event.target;
    this.setState((prevState, props) => ({
      [name]: value,
      gameweek: selectGameweek
    }));

    console.log('Change', this.state);
  };

  handleFormSubmit = event => {
    const {
      addTournamentTitle,
      addEntryFee,
      selectLeague,
      selectGameweek,
      isFundraiser,
      addFundraising
    } = this.state;
    const { addTournament, auth } = this.props;

    addTournament(
      {
        tournament_name: addTournamentTitle,
        entry_fee: addEntryFee,
        time: Date.now(),
        league: selectLeague,
        gameweek: selectGameweek,
        fundraiser: isFundraiser,
        fundraisingPercent: addFundraising
      },
      auth.uid
    );
    this.setState({
      addTournamentTitle: '',
      addEntryFee: '',
      time: new Date().toISOString(),

      league: selectLeague,
      gameweek: selectGameweek,
      fundraiser: isFundraiser,
      fundraisingPercent: addFundraising
    });
    console.log(this.state);

    event.preventDefault();
  };

  fundraiserAlert = () => {
    if (this.state.isFundraiser.label === 'No') {
      return (
        <Alert color="info">
          <p>95% of the total pot will be allocated to the winner</p>
          <small>5% to CupMarch</small>
        </Alert>
      );
    } else if (this.state.isFundraiser.label === 'Yes') {
      return (
        <Alert color="info">
          <p>
            {95 - this.state.addFundraising}% of the pot will be allocated to
            the winner.
          </p>
          <small>5% to CupMarch</small>
        </Alert>
      );
    } else {
      return null;
    }
  };

  renderAddForm = () => {
    const { addTournamentTitle, addEntryFee, addFundraising } = this.state;

    const league = [{ label: 'English Premier League' }, { label: 'La Liga' }];
    const gameweek = [
      { label: 'Gameweek 1' },
      { label: 'Gameweek 2' },
      { label: 'Gameweek 3' }
    ];

    const yes_no = [{ label: 'Yes' }, { label: 'No' }];

    return (
      <Col xs={12}>
        <h2>Create a winner takes all tournament</h2>
        <p>
          A descrption of a winner takes all tournament, include the fundraising
          option.
        </p>
        <Form onSubmit={this.handleFormSubmit}>
          <Row>
            <Col xs={12} md={4}>
              <FormGroup>
                <Label>Tournament name</Label>
                <Input
                  value={addTournamentTitle}
                  name="addTournamentTitle"
                  onChange={this.handleInputChange}
                  id="addTournamentTitle"
                  type="text"
                  placeholder="Tournament name"
                  required
                />
              </FormGroup>
            </Col>

            <Col xs={12} md={4}>
              <FormGroup>
                <Label>Choose League</Label>
                <VirtualizedSelect
                  options={league}
                  onChange={selectLeague => this.setState({ selectLeague })}
                  value={this.state.selectLeague}
                />
              </FormGroup>
            </Col>

            <Col xs={12} md={4}>
              <FormGroup>
                <Label>Choose starting gameweek</Label>
                <VirtualizedSelect
                  options={gameweek}
                  onChange={selectGameweek => this.setState({ selectGameweek })}
                  value={this.state.selectGameweek}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col>
              <FormGroup>
                <Label>Buy in</Label>

                <InputGroup>
                  <InputGroupAddon addonType="prepend">€</InputGroupAddon>
                  <Input
                    name="addEntryFee"
                    value={addEntryFee}
                    onChange={this.handleInputChange}
                    id="addEntryFee"
                    type="text"
                    placeholder="example: 100"
                  />
                  <InputGroupAddon addonType="append">.00</InputGroupAddon>
                </InputGroup>
              </FormGroup>
            </Col>

            <Col>
              <FormGroup>
                <Label>Is the tournament a fundraiser?</Label>
                <VirtualizedSelect
                  options={yes_no}
                  onChange={isFundraiser => this.setState({ isFundraiser })}
                  value={this.state.isFundraiser}
                />
              </FormGroup>
            </Col>

            <Col>
              {this.state.isFundraiser.label === 'Yes' ? (
                <FormGroup>
                  <Label>Percentage of pot allocated to fundraising?</Label>
                  <InputGroup>
                    <Input
                      name="addFundraising"
                      value={addFundraising}
                      onChange={this.handleInputChange}
                      id="addFundraising"
                      type="text"
                      placeholder="example: 50"
                    />
                    <InputGroupAddon addonType="append">%</InputGroupAddon>
                  </InputGroup>
                </FormGroup>
              ) : null}
            </Col>
          </Row>
          <Row>
            <Col className="text-right">
              <Button type="submit" value="Add Game">
                Create Tournament
              </Button>
            </Col>
          </Row>
        </Form>

        <Row className="pt-4">
          <Col xs={12}>{this.fundraiserAlert()}</Col>
        </Row>
      </Col>
    );
  };

  renderTournaments() {
    const { tournaments } = this.props;

    const tournamentsList = _.map(tournaments, (value, key) => {
      return (
        <ShowTournament key={key} tournamentsId={key} tournaments={value} />
      );
    });
    if (!_.isEmpty(tournamentsList)) {
      return tournamentsList;
    }
    return (
      <Row>
        <Col xs={12}>
          <h4>You don't have any tournaments</h4>
          <p>Click add button to create a tournament.</p>
        </Col>
      </Row>
    );
  }

  componentWillMount() {
    const { auth } = this.props;
    this.props.fetchTournaments(auth.uid);
    this.props.fetchGameweek();
    console.log('STATE', this.state);
  }

  render() {
    console.log('PROPS', this.props);
    if (this.props.tournaments === 'loading') {
      return (
        <div className="row center-align">
          <div className="col s4 offset-s4">
            <Preloader />
          </div>
        </div>
      );
    }

    return (
      <div>
        <Row>
          {this.renderAddForm()}
          {this.renderTournaments()}
        </Row>
      </div>
    );
  }
}

const mapStateToProps = ({ tournaments, auth, gameweek }) => {
  return {
    tournaments,
    auth,
    gameweek
  };
};

export default connect(
  mapStateToProps,
  actions
)(TournamentList);
