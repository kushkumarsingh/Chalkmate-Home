import { Avatar } from "@material-ui/core";
import ClassIcon from "@material-ui/icons/Class";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import GroupIcon from "@material-ui/icons/Group";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import AddIcon from '@material-ui/icons/Add';
import React from "react";
import styles from "./Sidebar.module.css";
import { Component } from "react";
import MiddleContain from "./ClassModal/MiddleContain";
import { ModalWithHeader } from "./shared/ui/Modal/Modal";
import { Link } from "react-router-dom";


class Sidebar extends Component {

  constructor() {
     
    super();

    this.state ={
      showMenu1:false,
    };

    this.state ={
      showMenu2:false,
    };

    this.state = {
      showClassModal: false,
    };

    this.state = {
      img : "./Image/live-session.svg"
    }

}

  
  Myclass = ()=>{
    if(this.state.showMenu1){
      return  <div className={styles.dropdown_menu1}>
      <ul>
          <div className={styles.menu1}>
          <li style={{marginTop:6,marginBottom:6,color:"#555555"}}>Create Class</li>
          <hr className={styles.Hr3}/>
          <li style={{marginTop:6,marginBottom:6,color:"#555555"}}>View archived class</li>
          <hr className={styles.Hr3}/>
          <li style={{marginTop:6,marginBottom:6,color:"#555555"}}>Join class</li>
          </div>
        </ul>
      </div>
    
    }
    else return <></>;
  }
  toogleMenu1 = () => {
    this.setState({
      showMenu1 : !this.state.showMenu1
    })
  }

  Mygroup = ()=>{
    if(this.state.showMenu2){
      return  <div className={styles.dropdown_menu1}>
      <ul>
          <div className={styles.menu1}>
          <li style={{marginTop:6,marginBottom:6,color:"#555555"}}>Create Group</li>
          <hr className={styles.Hr3}/>
          <li style={{marginTop:6,marginBottom:6,color:"#555555"}}>View archived group</li>
          <hr className={styles.Hr3}/>
          <li style={{marginTop:6,marginBottom:6,color:"#555555"}}>Join group</li>
          </div>
        </ul>
      </div>
    
    }
    else return <></>;
  }
  toogleMenu2 = () => {
    this.setState({
      showMenu2 : !this.state.showMenu2
    })
  }

  
  OpenModal = () => {
    this.setState({ showClassModal: true });
  };

  closeModal = () => {
    this.setState({ showClassModal: false });
  };

render(){
  return (
    <div className={styles.sidebar}>
      <div className={styles.profile_section}>
      <div className={styles.sidebar_top}>
        <img
          src="./Image/Rectangle.png"
          alt=""
        />
        <img src="./Image/default_user.png" className={styles.sidebar_avatar}/>
        <div className={styles.name}>
        <img src="./Image/badge.svg" style={{width:32,height:32}}/>
        <h2>Vijaya Bajpai</h2>
        </div>
        <p>Director-Corporate Affairs <br />| J kakehasti Services Pvt Ltd.</p>
        </div>
        <hr className={styles.Hr}/>
        <div className={styles.view}>
        <p>Who viewed your profile</p>
        <p style={{color:"#236AE8"}}>{Math.floor(Math.random()*100)}</p>
        </div>

        <div className={styles.view}>
        <p>My connections <br/> <span style={{color:"#236AE8",textDecorationLine: "underline"}}>Grow your network </span></p>
        <p style={{color:"#236AE8"}}>872</p>
        </div>

        <hr className={styles.Hr}/>

        <div onClick = {this.props.PremiumModalOpener} className={`${styles.premium_view} ${styles.view}`}>
          <img src="./Image/diamond.svg" style={{width:24,height:27,marginTop:14}}/>
          <p style={{marginLeft:2,marginBottom:5,cursor:"pointer"}}>Access exclusive profile insights <br/> <span className={styles.premium_text_sidebar}>Try premium free for 1 month</span></p>
        </div>

        <hr className={styles.Hr}/>

        <div className={styles.activity}>
          <p>My activities</p>
        </div>

        </div>
        
        <div className={styles.live_stream}>
        
          <button className={styles.live_session}>
            <img src={this.state.img}
              onMouseEnter={() => {
              this.setState({
                img: "./Image/live-session-hover.svg"
              })
            }}
  
            onMouseOut={() => {
              this.setState({
                img: "./Image/live-session.svg"
              })
            }}
            className={styles.video} 
            style={{width:24,height:24,marginLeft:"10%"}}/>
            <span style={{marginLeft:15}}>Start Live session</span>
            </button>
            
        </div>

      <div className={styles.sidebar_mycontent}>
        <div className={styles.side}>
        <img src="./Image/Chalkmate_MyClasses.svg" className={styles.sidebar_icon1} style={{width : 35,height: 35}}/>
        <h3 style={{marginLeft:15}}>My Classes</h3>
        </div>
        <div  className={styles.navbar_menu1}>
         <MoreHorizIcon onClick={this.toogleMenu1} className={styles.sidebar_icon2} style={{marginTop:7,cursor:"pointer"}}/>
         <this.Myclass />
         </div>
      </div>

      <div className={styles.sidebar_stats}>
        <div className={styles.sidebar_stat}>
          <p>Set up your online Class, add students, and start sharing classwork.</p>
        </div>
        <hr className={styles.Hr}/>
        <div className={styles.sidebar_stat1}>
          <p onClick={this.props.ClassModalOpener}><AddIcon style={{width:24,height:24}}/><span style={{marginLeft:5}}>CREATE A CLASS</span></p>

        </div>
      </div>

      <div className={styles.sidebar_mycontent}>
        <div className={styles.side}>
        <img src="./Image/Chalkmate_Mygroup.svg" className={styles.sidebar_icon1} style={{width : 35,height: 35}}/>
        <h3 style={{marginLeft:15}}>My Group</h3>
        </div>
        <div  className={styles.navbar_menu1}>
         <MoreHorizIcon onClick={this.toogleMenu2} className={styles.sidebar_icon2} style={{marginTop:7,cursor:"pointer"}}/>
         <this.Mygroup />
         </div> 
        </div>

      <div className={styles.sidebar_stats}>
        <div className={styles.sidebar_stat}>
          <p>Share resources and collaborate with educator like you.</p>
        </div>
        <hr className={styles.Hr}/>
        <div className={styles.sidebar_stat1}>
          <p onClick={this.props.GroupModalOpener}><AddIcon style={{width:24,height:24}}/><span style={{marginLeft:5}}>CREATE A GROUP</span></p>
        </div>
      </div>

      <div className={styles.sidebar_mycontent}>
        <div className={styles.side}>
        <img src="./Image/Chalkmate_Bookmark.svg" className={styles.sidebar_icon1} style={{width : 35,height: 35}}/>
        <h3 style={{marginLeft:15}}>My Bookmarks</h3>
        </div>
        {/* <MoreHorizIcon className="sidebar-icon2" /> */}
      </div>

      <div className={styles.sidebar_stats}>
        <div className={styles.sidebar_stat} style={{padding:10}}>
          <p>All hashtag</p>
          <p style={{color:"#236AE8"}}>42</p>
        </div>
        <div className={styles.sidebar_stat}>
          <p>#physics #science #maths #equati...</p>
        </div>
      </div>
    </div>
  );
}
}

export default Sidebar;
