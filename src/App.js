import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Land from './components/landing/Land';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/navBar/index';
import Routes from './components/Routing/Routes'
import './App.css';


const  App = () => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/Greg-Portfolio' component={Land}/>
          <Route component ={Routes}/>
          </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
