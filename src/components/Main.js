import React from 'react';
import { Container } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import Games from './Games';
import Overview from './Overview';
import Competition from './Competition';
import SelectLeague from './create_tournament/SelectLeague';
import PremierLeague from './create_tournament/PremierLeague';
import LaLiga from './create_tournament/LaLiga';
import Profile from './Profile';
import Settings from './Settings';
import TournamentList from '../containers/TournamentList';

const Main = () => (
  <Container>
    <main>
      <Switch>
        <Route exact path="/app" component={Overview} />
        <Route path="/app/list" component={TournamentList} />

        <Route path="/app/competition" component={Competition} />
        <Route path="/app/games" component={Games} />
        <Route path="/app/profile" component={Profile} />
        <Route path="/app/settings" component={Settings} />

        {/* Create competition route */}
        {/*<Route path="/createtournament" component={CreateTournament} />*/}
        <Route path="app/selectleague" component={SelectLeague} />
        <Route path="app/premierleague" component={PremierLeague} />
        <Route path="app/laliga" component={LaLiga} />
      </Switch>
    </main>
  </Container>
);

export default Main;
