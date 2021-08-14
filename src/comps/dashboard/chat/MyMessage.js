import React, { Component } from 'react'
import styles from './css/mymessage.module.css'

export default class MyMessage extends Component {
    Prevstyle = {
        borderRadius: '20px 2px 20px 20px',
    }
    Nextstyle = {
        borderRadius: '20px 20px 2px 20px',
        marginBottom: '2px',
    }
    Bothstyle={
        borderRadius: '20px 2px 2px 20px',
        marginBottom: '2px',
    }
    render() {
        return (
            <div className={styles.outerContainer}> 
                <div className={styles.container}>
                    {this.props.message}
                </div>
            </div>
        )
    }
}