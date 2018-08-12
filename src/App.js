import React, { Component } from 'react';
import fire from './config/Fire';
import Login from './components/Login';
import DefaultLayout from './layouts/DefaultLayout';

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
        {this.state.user ? <DefaultLayout /> : <Login />}
      </div>
    );
  }
}

export default App;
