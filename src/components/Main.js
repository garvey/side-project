import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import Games from './Games';
import Overview from './Overview';
import Competition from './Competition';
import CreateTournament from './create_tournament/CreateTournament';
import SelectLeague from './create_tournament/SelectLeague';
import PremierLeague from './create_tournament/PremierLeague';
import LaLiga from './create_tournament/LaLiga';
import Profile from './Profile';
import Settings from './Settings';

const Main = () => (
  <Container>
    <main>
      <Switch>
        <Route exact path="/" component={Overview} />

        <Route path="/competition" component={Competition} />
        <Route path="/games" component={Games} />
        <Route path="/profile" component={Profile} />
        <Route path="/settings" component={Settings} />

        {/* Create competition route */}
        <Route path="/createtournament" component={CreateTournament} />
        <Route path="/selectleague" component={SelectLeague} />
        <Route path="/premierleague" component={PremierLeague} />
        <Route path="/laliga" component={LaLiga} />
      </Switch>
    </main>
  </Container>
);

export default Main;
