import React from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './nav-bar';
import Properties from './properties';
import AddProperty from './add-property';

const App = () => {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/add-property" component={AddProperty} />
        <Route />
      </Switch>
    </div>
  );
};

export default App;
