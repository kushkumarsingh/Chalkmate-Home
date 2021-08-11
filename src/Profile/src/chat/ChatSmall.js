import React, { Component } from 'react'
import styles from './css/ChatSmall.module.css'

export default class ChatSmall extends Component {
    render() {
        return (
            <div onClick={()=>this.props.openChat(this.props.name)} className={styles.container}>
                <div className={this.props.active?styles.innerContainerClicked:styles.innerContainer}>
                    <div className={styles.profilePicContainer}>
                        <img className={styles.profilePic} src={this.props.profilePicture} alt="profile"/>
                        <div className={styles.status}>
                        </div>
                    </div>
                    <div className={styles.nameContainer}>
                        <span className={styles.name}>{this.props.name}</span>
                        <span className={styles.lastMessage}>{this.props.last}</span>
                    </div>
                </div>
            </div>
        )
    }
}
