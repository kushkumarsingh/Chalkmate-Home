import { React, Component } from "react";
import Header from "./Header";
import Home from "./Home";
// import 'bootstrap/dist/css/bootstrap-grid.min.css';
import "./App.css";
import MobileHeader from "./Mobileheader";
import MobileBottom from "./MobileBottom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Class from "./CreateClass/class";
import Group from "./CreateGroup/group";

class App extends Component {
  
  render() {
    return (
        <Router>
          <Header/>
          <MobileHeader/>
          <Switch>
          <Route path="/livesession">
               <Class/>
             </Route>
             <Route path="/class">
               <Class/>
             </Route>
             <Route path="/group">
               <Group/>
             </Route>
             <Route path="/">
               <Home/>
             </Route>
          </Switch>
          <MobileBottom/>
        </Router>
       
    )
  }
}

export default App;