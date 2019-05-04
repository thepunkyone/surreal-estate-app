import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './nav-bar';
import Properties from './properties';
import AddProperty from './add-property';

class App extends Component {
  contructor(props) {
    super(props);
    this.state = {

    };
  }

  handleLogin = () => {

  }

  render() {
    return (
      <div>
        <NavBar onLogin={handleLogin} />
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
