import React from "react";
import { Component } from "react";
import { Link } from 'react-router-dom'
import styles from '../Profile.module.css'

class Header extends Component {

  constructor() {

    super();

    this.state = {
      showMenu: false,
    };
  }

  navbar = () => {
    if (this.state.showMenu) {
      return <div className={styles.dropdown_menu}>
        <ul>
          <li>
            <div className={styles.profile}>
              <img src="./Image/profile.png" className={styles.drop_profile} style={{ width: 32, height: 32, opacity: 1 }} />
              <h1 style={{ fontSize: 14, color: "#000000", cursor: 'pointer' }}>Vijaya Bajpai <br /> <span style={{ fontSize: 12, color: "#555555", fontWeight: "normal" }}>Physcis Teacher</span></h1>
            </div></li>
          <hr className={styles.Hr2} />
          <div className={styles.menu}>
            <Link to={this.props.editpage ? "/view" : "/edit"} style={{textDecoration: 'none'}}>
              <li style={{ marginTop: 6, marginBottom: 6, color: "#555555", cursor: 'pointer'}}
                onClick={() => {
                  this.props.editpage ? this.props.setEditPageState(false) : this.props.setEditPageState(true)
                }}
              >{this.props.editpage ? "Save Changes" : "Edit Profile"}</li>

            </Link>
            <hr className={styles.Hr2} />
            <li style={{ marginTop: 6, marginBottom: 6, color: "#555555", cursor: 'pointer' }}>Settings & Privacy</li>
            <hr className={styles.Hr2} />
            <li style={{ marginTop: 6, marginBottom: 6, color: "#555555", cursor: 'pointer' }}>Language</li>
            <hr className={styles.Hr2} />
            <li style={{ marginTop: 6, marginBottom: 6, color: "#555555", cursor: 'pointer' }}>Signout</li>
          </div>
        </ul>
      </div>

    }
    else return <></>;
  }
  toogleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.header_left}>
          <img src="./Image/chalkmate-logo.svg" alt="logo" />
          <div className={styles.header_search} style={{
            overflow: 'hidden',
          }}>
            <img src="./Image/Chalkmate_Search.svg" />
            <form>
              <input className={styles.input} type="text" placeholder="Search" />
            </form>
          </div>
        </div>

        <div className={styles.header_right}>
          <div className={styles.header_option}>
            <div className={styles.header_option_container}>
              <img src="./Image/home-active.svg" className={styles.image} style={{ width: 24, height: 21, opacity: 1 }} />
              <div className={styles.specific} style={{ color: "#236AE8" }}>Home</div>
            </div>
          </div>

          <div className={styles.header_option}>
            <div className={styles.header_option_container}>
              <img src="./Image/Chalkmate_MyClasses_gray.svg" className={styles.image} style={{ width: 28, height: 20 }} />
              <div className={styles.specific}>My Classes</div>
            </div>
          </div>

          <div className={styles.header_option}>
            <div className={styles.header_option_container}>
              <img src="./Image/Chalkmate_Mymessage.svg" className={styles.image} style={{ width: 24, height: 20 }} />
              <div className={styles.specific}>Messages</div>
            </div>
          </div>

          <div className={styles.header_option}>
            <div className={styles.header_option_container}>
              <img src="./Image/Chalkmate_Notification.svg" className={styles.image} style={{ width: 19, height: 16 }} />
              <div className={styles.specific}>Notifications</div>
            </div>
          </div>
          <div className={styles.profile_icon}>
            <img src="./Image/nav_menu.jpeg" className={styles.header_nav} style={{ cursor: 'pointer' }} onClick={() => {
              document.getElementById('hamburger-view').style.display = 'block'
              document.body.style.overflow = 'hidden'
            }} />
            <div className={styles.navbar_menu}>
              <img onClick={this.toogleMenu} src="./Image/profile.png" className={styles.header_avatar} />
              <this.navbar />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
