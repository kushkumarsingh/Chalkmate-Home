import React, { Component } from 'react'
import Image from './images/getStarted.png'
import styles from './GetStarted.module.css'

export default class GetStarted extends Component {
    render() {
        return (
            <div className={styles.container}>
                <img src={Image} className={styles.pic} />
                <div className={styles.content}>
                    <h2>
                        Getting Started With Chalkmate
                    </h2>
                    <p>
                        Create a class or join a existing class or group and start communicating with students and parents and share digital assignments, quizzes and more.
                    </p>
                </div>
                <div className={styles.buttonsContainer}>
                    <div className={styles.button}>
                        Join a Group
                    </div>
                    <div className={styles.button}>
                        Join a Class
                    </div>
                </div>
            </div>
        )
    }
}
