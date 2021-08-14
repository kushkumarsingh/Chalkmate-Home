import React from 'react';
import { Component } from 'react';
import styles from "./Mobileheader.module.css";

class MobileHeader extends Component{
   
    render() {
        return (
              <div className={styles.mobileheader}>
                <img src="./Image/profile.png" className={styles.mobileheader_image}/>
              <div className={styles.mobileheader_search}>
                <img src="./Image/Chalkmate_Search.svg"/>
              <form>
              <input className={styles.mobileinput} type="text" placeholder="Search" />
               </form>
                </div>
                 <img src="./Image/nav_menu.jpeg"/>
                 </div>
        );
    }
}

export default MobileHeader;