import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Switch, Route } from 'react-router-dom';
import Games from './Games';
import Homepage from './Homepage';
import Competition from './Competition';
import NewCompetition from './newcompetition/NewCompetiton';

const Main = () => (
  <Container>
    <main>
      <Switch>
        <Route path="/homepage" component={Homepage} />
        <Route path="/competition" component={Competition} />
        <Route path="/games" component={Games} />
        <Route path="/NewCompetition" component={NewCompetition} />
      </Switch>
    </main>
  </Container>
);

export default Main;
