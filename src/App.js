import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Nav from './components/Nav'
import Home from './components/Home'
import Pais from './components/Pais'
import NoMatch from './components/NoMatch'

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/pais/:pais' component={Pais}/>
        <Route path="*" component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
