import React, { Component } from 'react'
import Eye from './images/eye.svg'
import styles from './css/DropBox.module.css'
import DropArrow from './images/dropArrow.svg'
import Message from './images/message.svg'

export default class DropBox extends Component {
    render() {
        return (
            <div style={this.props.styles} className={styles.container}>
                {this.props.eye && <img className={styles.eye} src={Eye} alt="visibility"/>}
                {this.props.message && <img className={styles.eye} src={Message} alt="message"/>}
                <span className={this.props.light?styles.light:styles.normal}>{this.props.title}</span>
                {this.props.drop && <img src={DropArrow} className={styles.dropArrow} alt="dropArrow"/>}
            </div>
        )
    }
}
