import React from "react";
import RssFeedIcon from "@material-ui/icons/RssFeed";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import styles from "./RightSidebar.module.css";
import { Avatar } from "@material-ui/core";
import { style } from "@material-ui/system";

function RightSidebar() {
  return (
    <div className={styles.RightSidebar}>
      <div className={styles.Rightsidebar_mycontent}>
        <div className={styles.side}>
        <img src="./Image/Chalkmate_News.svg" className={styles.Rightsidebar_icon1} style={{width : 35,height: 35}}/>
        <h3 style={{marginLeft:15}}>News Feed</h3>
        </div>
        {/* <div style={{marginTop:7,cursor:"pointer"}}><MoreHorizIcon className="Rightsidebar-icon2" /></div> */}
      </div>

      <div className={styles.Rightsidebar_stats}>
        <div className={styles.Rightsidebar_stat}>
          <img src="./Image/profile1.png" style={{width:48,height:48}}/>
          <p className={styles.Rightsidebar_statNumber}>
            The things you'll find in higher direction
          </p>
        </div>
        <hr className={styles.Hr1}/>
        <div className={styles.Rightsidebar_stat}>
        <img src="./Image/profile.png" style={{width:48,height:48}}/>
          <p className={styles.Rightsidebar_statNumber}>
            Kepler-90 .A System with Most Planets.
          </p>
        </div>
        <hr className={styles.Hr1}/>
        <div className={styles.Rightsidebar_stat}>
        <img src="./Image/profilePicSample.png" style={{width:48,height:48}}/>
          <p className={styles.Rightsidebar_statNumber}>
            Kepler-90 .A System with Most Planets.
          </p>
        </div>
        <hr className={styles.Hr1}/>
        <div className={styles.Rightsidebar_stat}>
        <img src="./Image/profile2.png" style={{width:48,height:48}}/>
          <p className={styles.Rightsidebar_statNumber}>
            Kepler-90 .A System with Most Planets.
          </p>
        </div>
        <hr className={styles.Hr1}/>
        <div className={styles.Rightsidebar_stat}>
        <img src="./Image/profile3.png" style={{width:48,height:48}}/>
          <p className={styles.Rightsidebar_statNumber}>
            Kepler-90 .A System with Most Planets.
          </p>
        </div>
      </div>

      <div className={styles.Rightsidebar_mycontent}>
        <div className={styles.side}>
        <img src="./Image/Chalkmate_Courses.svg" className={styles.Rightsidebar_icon1} style={{width : 35,height: 35}}/>
        <h3 style={{marginLeft:15}}>Courses</h3>
        </div>
        {/* <div style={{marginTop:7,cursor:"pointer"}}><MoreHorizIcon className="Rightsidebar-icon2" /></div> */}
      </div>

      <div className={styles.Rightsidebar_stats}>
        <div className={styles.Rightsidebar_stat}>
        <img src="./Image/profile1.png" style={{width:48,height:48}}/>
          <p className={styles.Rightsidebar_statNumber}>
            The things you'll find in higher direction
          </p>
        </div>
        <hr className={styles.Hr1}/>
        <div className={styles.Rightsidebar_stat}>
        <img src="./Image/profile.png" style={{width:48,height:48}}/>
          <p className={styles.Rightsidebar_statNumber}>
            Kepler-90 .A System with Most Planets.
          </p>
        </div>
        <hr className={styles.Hr1}/>
        <div className={styles.Rightsidebar_stat}>
        <img src="./Image/profilePicSample.png" style={{width:48,height:48}}/>
          <p className={styles.Rightsidebar_statNumber}>
            Kepler-90 .A System with Most Planets.
          </p>
        </div>
        <hr className={styles.Hr1}/>
        <div className={styles.Rightsidebar_stat}>
        <img src="./Image/profile2.png" style={{width:48,height:48}}/>
          <p className={styles.Rightsidebar_statNumber}>
            Kepler-90 .A System with Most Planets.
          </p>
        </div>
        <hr className={styles.Hr1}/>
        <div className={styles.Rightsidebar_stat}>
        <img src="./Image/profile3.png" style={{width:48,height:48}}/>
          <p className={styles.Rightsidebar_statNumber}>
            Kepler-90 .A System with Most Planets.
          </p>
        </div>
      </div>
      {/* <div className="Rightsidebar-details">
        <h4 style={{lineHeight:"2",fontWeight:"normal"}}>
        About &nbsp;  Accessibility &nbsp; Help &nbsp; Centre  Privacy  &  Terms &nbsp; Ad &nbsp; Choices Advertising &nbsp; Business &nbsp; Services
        </h4>
      </div> */}
    </div>
  );
}

export default RightSidebar;
