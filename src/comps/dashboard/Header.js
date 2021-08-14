import React from "react";
import styles from './Header.module.css';
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
      return  <div className={styles.dropdown_menu}>
      <ul>
       <li><div className={styles.profile}>
       <img src="./Image/profile.png" className={styles.drop_profile} style={{width:32,height:32,opacity:1}}/>
       <h1 style={{fontSize:14,color:"#000000"}}>Vijaya Bajpai <br/> <span style={{fontSize:12,color:"#555555",fontWeight:"normal"}}>Physcis Teacher</span></h1>
     </div></li>
          <hr className={styles.Hr2}/>
          <div className={styles.menu}>
          <li style={{marginTop:6,marginBottom:6,color:"#555555"}}>View Profile</li>
          <hr className={styles.Hr2}/>
          <li style={{marginTop:6,marginBottom:6,color:"#555555"}}>Settings & Privacy</li>
          <hr className={styles.Hr2}/>
          <li style={{marginTop:6,marginBottom:6,color:"#555555"}}>Language</li>
          <hr className={styles.Hr2}/>
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
    <div className={styles.header}>
      <div className={styles.header_left}>
        <img src="./Image/chalkmate-logo.svg" alt="logo" />
        <div className={styles.header_search}>
          <img src="./Image/Chalkmate_Search.svg"/>
          <form>
          <input className={styles.input} type="text" placeholder="Search profile" />
          </form>
        </div>
      </div>

      <div className={styles.header_right}>
       <div className={styles.header_option}>
        <div className={styles.header_options_container}>
          <img src="./Image/home-active.svg" className={styles.image} style={{width : 24,height: 21,opacity:1}}/>
          <div className={styles.specific} style={{color:"#236AE8"}}>Home</div>
        </div>
      </div>

       <div className={styles.header_option}>
        <div className={styles.header_options_container}>
        <img src="./Image/Chalkmate_MyClasses_gray.svg" className={styles.image} style={{width : 28,height: 20}}/>
        <div className={styles.specific}>My Classes</div>
        </div>
       </div>

       <div className={styles.header_option}>
        <div className={styles.header_options_container}>
        <img src="./Image/Chalkmate_Mymessage.svg" className = {styles.image} style={{width : 24,height: 20}}/>
        <div className={styles.specific}>Messages</div>
        </div>
       </div>

       <div className={styles.header_option}>
        <div className={styles.header_options_container}>
        <img src="./Image/Chalkmate_Notification.svg" className = {styles.image} style={{width : 19,height:16}}/>
       <div className={styles.specific}>Notifications</div>
       </div>
       </div>

       <div className={styles.header_option}>
        <div className={styles.header_options_container} style={{marginBottom:5}}>
        <img src="./Image/career.svg" className = {styles.image} style={{width : 23,height:23,opacity:1}}/>
       <div className={styles.specific}>Career</div>
       </div>
       </div>

       <div className = {styles.profile_icon}>
       {/* <img src="./Image/nav_menu.jpeg"/> */}
       <div  className= {styles.navbar_menu}>
         <img onClick={this.toogleMenu}  src="./Image/profile.png" className={styles.header_avatar}/>
        <this.navbar />
        </div>
       </div>
      </div>
    </div>
  );
}
}

export default Header;
