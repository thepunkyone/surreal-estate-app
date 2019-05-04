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
    const { userId } = response.data;
    this.setState({ userId: userId });
  };

  handleLogout = () => {

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
