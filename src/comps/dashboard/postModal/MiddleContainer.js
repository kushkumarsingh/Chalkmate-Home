import React, { Component } from 'react'
import styles from './css/MiddleContainer.module.css'
import ProfilePic from './images/profilepic.jpg'
import DropBox from './DropBox'
import Video from '../Video'

export default class MiddleContainer extends Component {
    render() {
        return (
            <div>
                <div className={styles.container}>
                    <img className={styles.profilePic} src={ProfilePic} alt="Profile Pic"/>
                    <div className={styles.dropDiv}>
                        <DropBox drop title="Vijaya Bajpai"/>
                        <DropBox drop light eye title="Anyone"/>
                    </div>
                </div>
                <div className={styles.textareaContainer}>
                    {this.props.pic && (!this.props.video ? <img src={this.props.pic} width="100%"/> : <Video src={this.props.pic} />)}
                    <textarea onChange = {e=>this.props.onChange(e)} type='textarea' className={styles.textarea} rows="10">
                    </textarea>
                </div>
                <p className={styles.hashtag}>
                    Add Hashtags
                </p>
            </div>
        )
    }
}
