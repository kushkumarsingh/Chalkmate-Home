import React from 'react';
import { Component } from 'react';
import "./MobileBottom.css";

class MobileBottom extends Component{
   
    render() {
        return (
              <div className="mobileBottom">
                <div className="bottom">
                <div className="bottom-container">
                    <div>
                        <img src="./Image/homeIcon.svg" className="mobile-image" style={{width : 22,height: 19}}/>
                        <div className="image-name">Home</div>
                    </div>
                </div>
                </div>
                <div className="bottom">
                <div className="bottom-container">
                    <div>
                        <img src="./Image/Chalkmate_MyClasses_gray.svg" className = "mobile-image" style={{width : 25,height: 18}}/>
                        <div className="image-name">My Classes</div>
                    </div>
                </div>
                </div>
                <div className="bottom">
                <div className="bottom-container">
                 <img src="./Image/add.svg" className="mobile-image" style={{width : 57,height: 57,opacity:1}}/>
                </div>
                </div>
                <div className="bottom">
                <div className="bottom-container">
                    <div>
                        <img src="./Image/Chalkmate_Mymessage.svg" className = "mobile-image" style={{width : 21,height: 18}}/>
                        <div className="image-name">Messages</div>
                    </div>
                </div>
                </div>
                <div className="bottom">
                <div className="bottom-container">
                    <div>
                        <img src="./Image/Chalkmate_Notification.svg" className = "mobile-image" style={{width : 17,height:15}}/>
                        <div className="image-name">Notifications</div>
                    </div>
                </div>
                </div>
             </div>
        );
    }
}

export default MobileBottom;