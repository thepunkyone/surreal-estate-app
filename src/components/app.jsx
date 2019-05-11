import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './nav-bar';
import Properties from './properties';
import Favourites from './favourites';
import AddProperty from './add-property';

class App extends Component {
  state = {
    userId: null,
  };

  handleLogin = (response) => {
    this.setState({ userId: response.userID });
  };

  handleLogout = () => {
    window.FB.logout();
    this.setState({ userId: null });
  };

  render() {
    return (
      <div>
        <NavBar onLogin={this.handleLogin} onLogout={this.handleLogout} userId={this.state.userId} />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Properties {...props} userId={this.state.userId} />}
          />
          <Route
            exact
            path="/saved-properties"
            render={(props) => <Favourites {...props} userId={this.state.userId} favourites={this.state.favourites} />}
          />
          <Route exact path="/add-property" component={AddProperty} />
          <Route />
        </Switch>
      </div>
    );
  }
}

export default App;
