import React, { Component } from 'react'
import styles from './css/message.module.css'

export default class Message extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.profilePicContainer}>
                    <img className={styles.profilePic} src={this.props.profilePicture} alt="Profile Pic"/>
                    <div className={styles.status}>
                    </div>
                </div>

                <div className={styles.middleContainer}>
                    <div className={styles.name}>{this.props.name}</div>
                    <div>{this.props.message}</div>
                </div>

                <div className={styles.dateContainer}>
                    {this.props.date}
                </div>
            </div>
        )
    }
}
