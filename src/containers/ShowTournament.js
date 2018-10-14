import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col } from 'reactstrap';
import { deleteTournament } from '../actions';
import { Link } from 'react-router-dom';

class ShowTournament extends Component {
  handleDeleteClick = deleteTournamentsId => {
    const { deleteTournament, auth } = this.props;
    deleteTournament(deleteTournamentsId, auth.uid);
  };

  render() {
    const { tournaments, tournamentsId } = this.props;
    return (
      <Col xs={12}>
        <h4>
          <Link to={`/tournaments/${tournaments}`}>
            {tournaments.tournament_name}
          </Link>
          <span onClick={() => this.handleDeleteClick(tournamentsId)}>
            <Button className="large material-icons">delete</Button>
          </span>
        </h4>
      </Col>
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
  { deleteTournament }
)(ShowTournament);
