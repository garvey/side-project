import React, { Component } from 'react';
import Website from './components/website/Website';
import DefaultLayout from './layouts/DefaultLayout';
import requireAuth from './components/auth/requireAuth';
import { connect } from 'react-redux';
import { fetchUser } from './actions';
import { BrowserRouter, Route } from 'react-router-dom';
import SignIn from './components/SignIn';

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
    console.log(this.props);
  }

  render() {
    return (
      <div className="h-100">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Website} />
            <Route path="/app" component={requireAuth(DefaultLayout)} />
          </div>
        </BrowserRouter>
        {/* this.state.user ? <DefaultLayout /> : <Website /> */}
      </div>
    );
  }
}

export default connect(
  null,
  { fetchUser }
)(App);
