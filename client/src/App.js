import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Land from './components/landing/Land';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/index';
import Routes from './components/Routing/Routes'
import './App.css';
import MainFooter from './components/mainFooter/MainFooter';


const  App = () => {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/' component={Land}/>
          <Route component ={Routes}/>
          </Switch>
      <MainFooter/>
      </Fragment>
    </Router>
  );
}

export default App;
