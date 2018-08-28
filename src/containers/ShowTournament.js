import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Col } from 'reactstrap';
import { deleteTournament, deleteTournamentsId } from '../actions';

class ShowTournament extends Component {
  handleDeleteClick = deleteTournamentsId => {
    const { deleteTournament, auth } = this.props;
    deleteTournament(deleteTournamentsId, auth.uid);
  };

  render() {
    const { tournaments, tournamentsId } = this.props;
    return (
      <Col key="toDoName" className="pt-4">
        <h4>
          {tournaments.tournament_name}{' '}
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
