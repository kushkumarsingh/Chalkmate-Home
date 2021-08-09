import React from 'react';
import { Component } from 'react';
import "./Mobileheader.css";

class MobileHeader extends Component{
   
    render() {
        return (
              <div className="mobileheader">
                <img src="./Image/profile.png" className="mobileheader-image"/>
              <div className="mobileheader-search">
                <img src="./Image/Chalkmate_Search.svg"/>
              <form>
              <input className="mobileinput" type="text" placeholder="Search" />
               </form>
                </div>
                 <img src="./Image/nav_menu.jpeg"/>
                 </div>
        );
    }
}

export default MobileHeader;