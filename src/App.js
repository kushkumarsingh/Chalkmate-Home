import './App.css';
import Nav from './Component/Nav/Nav';
import Hero from './Component/Hero/Hero';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HomePage from "./comps/Home";
import MeetingPage from "./comps/Meeting";
import CallPage from './comps/CallPage/CallPage';
import NoMatch from "./comps/NoMatch/NoMatch";
import Dashboard from "./comps/dashboard/App";
import React from 'react';

export default class App extends React.Component {


  Home() {
    return (
      <div className="App">
        <Nav />
        <Hero />
      </div>
    );
  }


  render() {

    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <this.Home />
          </Route>
          <Route exact path="/video">
            <HomePage />
          </Route>
          <Route exact path="/:id/meeting">
            <CallPage />
          </Route>
          <Route exact path="/user">
            <Dashboard />
          </Route>
          <Route exact path="/:id">
            <MeetingPage />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    );
  }
}
