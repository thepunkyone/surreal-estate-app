import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './nav-bar';
import Properties from './properties';
import AddProperty from './add-property';

class App extends Component {
  state = {

  };

  handleLogin = () => {

  };

  render() {
    return (
      <div>
        <NavBar onLogin={this.handleLogin} />
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
