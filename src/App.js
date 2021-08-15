import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'


import Nav from './Component/Nav/Nav';
import Hero from './Component/Hero/Hero';


import HomePage from "./comps/Home";
import MeetingPage from "./comps/Meeting";
import CallPage from './comps/CallPage/CallPage';
import NoMatch from "./comps/NoMatch/NoMatch";
import Dashboard from "./comps/dashboard/App";


import Header from './Profile/src/components/Header';
import MobileBottom from './Profile/src/components/MobileBottom';
import ChooseTemplates from './Profile/src/components/ChooseTemplates';
import Template1 from './Profile/src/components/Template1';
import Template2 from './Profile/src/components/Template2';
import Template3 from './Profile/src/components/Template3';
import Template4 from './Profile/src/components/Template4';
import Chat from './Profile/src/chat/Chat';
import Feed from './Profile/src/pages/Feed';

import styles from './Profile/src/Profile.module.css'


export default class App extends React.Component {



  constructor(props) {
    super(props);

    this.state = {
      editpage: false,
    };

    // this.Home = this.Home.bind(this);
    this.Profile = this.Profile.bind(this);

  }



  setEditPageState(editval) {
    this.setState({ editpage: editval })
  }



  Profile() {
    return (
      <div
        className={styles.mains}
      >
        <div
          class={styles.header_feed}
        >
          <Header editpage={this.state.editpage} setEditPageState={this.setEditPageState.bind(this)} />
          {/* <MobileHeader /> */}
        </div>
        <br />
        <div
          class={styles.feed}
        >
          <Feed editpage={this.state.editpage} />

        </div>
        <Chat />
        <MobileBottom />
      </div>
    )
  }







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


          <Route exact path="/user">
            <Dashboard />
          </Route>

          <Route exact path={this.state.editpage ? '/edit' : '/view'} children={<this.Profile />} />
          <Route path="/templates" children={<this.Profile />} />

          <Route path='/template/1' children={<Template1 />} />
          <Route path='/template/2' children={<Template2 />} />
          <Route path='/template/3' children={<Template3 />} />
          <Route path='/template/4' children={<Template4 />} />



          <Route exact path="/:id/meeting">
            <CallPage />
          </Route>
          <Route exact path="/:id">
            <MeetingPage />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>

        <Route path="/templates/choose" children={<ChooseTemplates editpage={this.state.editpage} />} />

      </Router>
    );
  }
}

















// import Header from './components/Header'
// import MobileBottom from './components/MobileBottom'
// import MobileHeader from './components/Mobileheader'

// import ChooseTemplates from './components/ChooseTemplates'
// import Template1 from './components/Template1'
// import Template2 from './components/Template2'
// import Template3 from './components/Template3'
// import Template4 from './components/Template4'
// import Chat from './chat/Chat'

// components
// import Feed from './pages/Feed';


// export default class App extends React.Component {



//   render() {
//     return (
//       <div>
//         <Router>
//           <Switch>
//             <Route exact path={this.state.editpage ? '/edit' : '/'} children={<this.Home />} />
//             <Route path="/templates" children={<this.Home />} />

//             <Route path='/template/1' children={<Template1 />} />
//             <Route path='/template/2' children={<Template2 />} />
//             <Route path='/template/3' children={<Template3 />} />
//             <Route path='/template/4' children={<Template4 />} />

//             <Route>{404}</Route>
//           </Switch>
//           <Route path="/templates/choose" children={<ChooseTemplates />} />
//         </Router>
//       </div>
//     )
//   }
// }