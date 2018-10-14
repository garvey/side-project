import React, { Component } from 'react';
import fire from './config/firebase';
import Login from './components/Login';
import Website from './components/website/Website';
import DefaultLayout from './layouts/DefaultLayout';

import { Route, Redirect, Switch } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged(user => {
      //console.log(user);
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <div className="h-100">
        {this.state.user ? <DefaultLayout /> : <Website />}
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={DefaultLayout} />
          {/* <Redirect to="/" component={Website} /> */}
        </Switch>
      </div>
    );
  }
}

export default App;
