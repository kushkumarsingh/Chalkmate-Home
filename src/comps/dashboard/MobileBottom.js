import { style } from '@material-ui/system';
import React from 'react';
import { Component } from 'react';
import styles from "./MobileBottom.module.css";

class MobileBottom extends Component{
   
    render() {
        return (
              <div className={styles.mobileBottom}>
                <div className={styles.bottom}>
                <div className={styles.bottom_container}>
                    <div>
                        <img src="./Image/homeIcon.svg" className={styles.mobile_image} style={{width : 22,height: 19}}/>
                        <div className={styles.image_name}>Home</div>
                    </div>
                </div>
                </div>
                <div className={styles.bottom}>
                <div className={styles.bottom_container}>
                    <div>
                        <img src="./Image/Chalkmate_MyClasses_gray.svg" className = {styles.mobile_image} style={{width : 25,height: 18}}/>
                        <div className={styles.image_name}>My Classes</div>
                    </div>
                </div>
                </div>
                <div className={styles.bottom}>
                <div className={styles.bottom_container}>
                 <img src="./Image/add.svg" className={styles.mobile_image} style={{width : 57,height: 57,opacity:1}}/>
                </div>
                </div>
                <div className={styles.bottom}>
                <div className={styles.bottom_container}>
                    <div>
                        <img src="./Image/Chalkmate_Mymessage.svg" className = {styles.mobile_image} style={{width : 21,height: 18}}/>
                        <div className={styles.image_name}>Messages</div>
                    </div>
                </div>
                </div>
                <div className={styles.bottom}>
                <div className={styles.bottom_container}>
                    <div>
                        <img src="./Image/Chalkmate_Notification.svg" className = {styles.mobile_image} style={{width : 17,height:15}}/>
                        <div className={styles.image_name}>Notifications</div>
                    </div>
                </div>
                </div>
             </div>
        );
    }
}

export default MobileBottom;