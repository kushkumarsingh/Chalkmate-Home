import { React, Component } from "react";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import RightSidebar from "./RightSidebar";
import {FeedsProvider} from './FeedsContext';
import Chat from './chat/Chat'
import PremiumModal from './premiumModal/PremiumModal';
import ClassModal from "./ClassModal/ClassModal";
import GroupModal from './GroupModal/GroupModal';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import "./App.css";
import ShareModal from './shareModal/ShareModal';

class Home extends Component {
  state = {
    showPremiumModal: false,
    showClassModal: false,
    showGroupModal: false,
    showShareModal: false,
  }

  PremiumModalOpener = () =>{
    this.setState({showPremiumModal:true})
    // alert("Hello");
  }

  PremiumModalCloser = () =>{
    this.setState({showPremiumModal:false})
  } 
  
  ClassModalCloser = () =>{
    this.setState({showClassModal:false})
  } 

  ClassModalOpener = () =>{
    this.setState({showClassModal:true})
  }

  GroupModalCloser = () =>{
    this.setState({showGroupModal:false})
  } 

  GroupModalOpener = () =>{
    this.setState({showGroupModal:true})
  }

  shareModalCloser = () =>{
    this.setState({showShareModal:false})
  } 

  shareModalOpener = () =>{
    this.setState({showShareModal:true})
  }

  render() {
    return (
      <div className="app">
        {/* <PopUp /> */}

        {/* App Body */}
        <div className="app-body">
          <ClassModal closeModal = {this.ClassModalCloser} show = {this.state.showClassModal} />
          <GroupModal closeModal = {this.GroupModalCloser} show = {this.state.showGroupModal} />
          <PremiumModal closeModal = {this.PremiumModalCloser} show = {this.state.showPremiumModal} />
          <ShareModal closeModal = {this.shareModalCloser} show = {this.state.showShareModal} />
          <div className="container" >
            <div className="row">
                <div className="col-xs-0 col-sm-0 col-md-3" >
                   <Sidebar GroupModalOpener = {this.GroupModalOpener} ClassModalOpener = {this.ClassModalOpener} PremiumModalOpener = {this.PremiumModalOpener}/>
                </div>
                <div className="col-12 col-xs-12 col-sm-12 col-md-6">
                  <FeedsProvider>
                      <Feed shareModalOpener={this.shareModalOpener}/>
                  </FeedsProvider>
                  </div>
                <div  className="col-xs-0 col-sm-0 col-md-3" >
                  <RightSidebar />
                </div>
                <div className="col-xs-0 col-sm-0 col-md-3">
                  <Chat />
                </div>
              </div>
          </div>
         </div>
        
       </div>
    )
  }
}

export default Home;