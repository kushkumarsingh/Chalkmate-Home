import React, { Component } from 'react'
import styles from './css/yourmessage.module.css'

export default class YourMessage extends Component {
    Prevstyle = {
        borderRadius: '2px 20px 20px 20px',
    }
    Nextstyle = {
        borderRadius: '20px 20px 20px 2px',
        marginBottom: '2px',
    }
    Bothstyle={
        borderRadius: '2px 20px 20px 2px',
        marginBottom: '2px',
    }
    render() {
        return (
            <div className={styles.outer}> 
                <div className={styles.container}>
                    {this.props.message}
                </div>
            </div>
        )
    }
}
