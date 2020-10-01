import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {ThemeProvider} from '@material-ui/core'
import theme from './TemaConfig'
import Covidstate from './context/covidState'

import Nav from './components/Nav'
import Home from './components/Home'
import Pais from './components/Pais'
import NoMatch from './components/NoMatch'
import Footer from  './components/Footer'
function App() {
  return (
    <Covidstate>
      <ThemeProvider theme={theme}>
        <Router>
            <Nav />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/pais' component={Pais}/>
              <Route path="*" component={NoMatch} />
            </Switch>
        </Router>
        <Footer />
      </ThemeProvider>
    </Covidstate>
  );
}

export default App;
