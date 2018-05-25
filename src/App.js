import React from 'react';
import SideBar from './components/SideBar';
import Main from './components/Main';
import { Container, Row, Col, Label, Button } from 'reactstrap';
import './App.scss';

const App = () => (
  <Container-fluid>
    <Row className="h-100">
      <SideBar />
      <Main />
    </Row>
  </Container-fluid>
);

export default App;
