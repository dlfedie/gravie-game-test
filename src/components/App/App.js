import React from 'react';
import './App.css';

import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Nav from '../Nav/Nav';
import SearchPage from '../SearchPage/SearchPage';
import CheckoutPage from '../CheckoutPage/CheckoutPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route exact path="/home" component={SearchPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
