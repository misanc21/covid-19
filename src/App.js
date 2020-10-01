import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ThemeProvider} from '@material-ui/core'
import theme from './TemaConfig'
import Covidstate from './context/covidState'

import Nav from './components/Nav'
import Home from './components/Home'
import Pais from './components/Pais'
import NoMatch from './components/NoMatch'
function App() {
  return (
    <Covidstate>
      <Router>
        <ThemeProvider theme={theme}>
          <Nav />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/pais' component={Pais}/>
            <Route path="*" component={NoMatch} />
          </Switch>
        </ThemeProvider>
      </Router>
    </Covidstate>
  );
}

export default App;
