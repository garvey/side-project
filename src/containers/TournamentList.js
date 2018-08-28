import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as actions from '../actions';
import ShowTournament from './ShowTournament';
import Preloader from './Preloader';
import { Button, Input, Row, Col } from 'reactstrap';

class TournamentList extends Component {
  state = {
    addFormVisible: false,
    addTournamentTitle: ''
  };

  handleInputChange = event => {
    this.setState({ addTournamentTitle: event.target.value });
  };

  handleFormSubmit = event => {
    const { addTournamentTitle } = this.state;
    const { addTournament, auth } = this.props;
    event.preventDefault();
    addTournament({ tournament_name: addTournamentTitle }, auth.uid);
    this.setState({ addTournamentTitle: '' });
  };

  renderAddForm = () => {
    const { addFormVisible, addTournamentTitle } = this.state;
    if (addFormVisible) {
      return (
        <Col xs={12}>
          <form onSubmit={this.handleFormSubmit}>
            <div className="input-field">
              <i className="material-icons prefix">Tournament name</i>
              <Input
                value={addTournamentTitle}
                onChange={this.handleInputChange}
                id="addTournamentTitle"
                type="text"
                placeholder="Tournament name"
              />
            </div>
          </form>
        </Col>
      );
    }
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
  }

  render() {
    const { addFormVisible } = this.state;
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
        <div className="fixed-action-btn">
          <Button
            onClick={() => this.setState({ addFormVisible: !addFormVisible })}
            className="btn-floating btn-large teal darken-4"
          >
            {addFormVisible ? (
              <i className="large material-icons">close</i>
            ) : (
              <i className="large material-icons">add</i>
            )}
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ tournaments, auth }) => {
  return {
    tournaments,
    auth
  };
};

export default connect(
  mapStateToProps,
  actions
)(TournamentList);
