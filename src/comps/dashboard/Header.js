import React from "react";
import "./Header.css";
import HeaderOption from "./HeaderOption";
import SearchIcon from "@material-ui/icons/Search";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ClassIcon from "@material-ui/icons/Class";
import { Avatar } from "@material-ui/core";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import { Component } from "react";

class Header extends Component {
  
  constructor() {
     
    super();

    this.state ={
      showMenu:false,
    };
}
  
  navbar = ()=>{
    if(this.state.showMenu){
      return  <div className="dropdown_menu">
      <ul>
       <li><div className="profile">
       <img src="./Image/profile.png" className="drop_profile" style={{width:32,height:32,opacity:1}}/>
       <h1 style={{fontSize:14,color:"#000000"}}>Vijaya Bajpai <br/> <span style={{fontSize:12,color:"#555555",fontWeight:"normal"}}>Physcis Teacher</span></h1>
     </div></li>
          <hr className="Hr2"/>
          <div className="menu">
          <li style={{marginTop:6,marginBottom:6,color:"#555555"}}>View Profile</li>
          <hr className="Hr2"/>
          <li style={{marginTop:6,marginBottom:6,color:"#555555"}}>Settings & Privacy</li>
          <hr className="Hr2"/>
          <li style={{marginTop:6,marginBottom:6,color:"#555555"}}>Language</li>
          <hr className="Hr2"/>
          <li style={{marginTop:6,marginBottom:6,color:"#555555"}}>Signout</li>
          </div>
        </ul>
      </div>
    
    }
    else return <></>;
  }
  toogleMenu = () => {
    this.setState({
      showMenu : !this.state.showMenu
    })
  }

  render(){
  return (
    <div className="header-dashboard">
      <div className="header-left">
        <img src="./Image/chalkmate-logo.svg" alt="logo" />
        <div className="header-search">
          <img src="./Image/Chalkmate_Search.svg"/>
          <form>
          <input className="input" type="text" placeholder="Search" />
          </form>
        </div>
      </div>

      <div className="header-right">
       <div className="header-option">
        <div className="header-options-container">
          <img src="./Image/home-active.svg" className="image" style={{width : 24,height: 21,opacity:1}}/>
          <div className="specific" style={{color:"#236AE8"}}>Home</div>
        </div>
      </div>

       <div className="header-option">
        <div className="header-options-container">
        <img src="./Image/Chalkmate_MyClasses_gray.svg" className = "image" style={{width : 28,height: 20}}/>
        <div className="specific">My Classes</div>
        </div>
       </div>

       <div className="header-option">
        <div className="header-options-container">
        <img src="./Image/Chalkmate_Mymessage.svg" className = "image" style={{width : 24,height: 20}}/>
        <div className="specific">Messages</div>
        </div>
       </div>

       <div className="header-option">
        <div className="header-options-container">
        <img src="./Image/Chalkmate_Notification.svg" className = "image" style={{width : 19,height:16}}/>
       <div className="specific">Notifications</div>
       </div>
       </div>
       <div className = "profile-icon">
       <img src="./Image/nav_menu.jpeg"/>
       <div  className="navbar_menu">
         <img onClick={this.toogleMenu}  src="./Image/profile.png" className="header-avatar"/>
        <this.navbar />
        </div>
       </div>
      </div>
    </div>
  );
}
}

export default Header;
