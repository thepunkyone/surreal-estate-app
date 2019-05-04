import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './nav-bar';
import Properties from './properties';
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
          <Route exact path="/" component={Properties} />
          <Route exact path="/add-property" component={AddProperty} />
          <Route />
        </Switch>
      </div>
    );
  }
}

export default App;
