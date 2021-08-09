import React, { Component } from 'react';
import { ModalWithHeader } from '../shared/ui/Modal/Modal';
import styles from './shareModal.module.css'
import Copy from './copy.svg';

export default class ShareModal extends Component {
    render() {
        return (
            <div>
                <ModalWithHeader
                    title="Share"
                    show={this.props.show}
                    closeHandler={this.props.closeModal}
                    maxWidth="569px"
                >
                <div className={styles.container}>
                    <div className={styles.socialContainer}>
                       <img src="./Image/whatsapp.png"></img>
                       <img src="./Image/facebook.png"></img>
                       <img src="./Image/twitter.png"></img>
                       <img src="./Image/linkedin.png"></img>
                       <img src="./Image/pinterest.png"></img>
                    </div> 
                    <div className={styles.copyContainer}> 
                        <p className={styles.link}>https://chalkmate.com/ccy-beag-tdz</p>
                        <img onClick={() => {navigator.clipboard.writeText("https://chalkmate.com/ccy-beag-tdz")}} className={styles.copyButton} height="25px" width="25px" src={Copy}/>
                    </div>
                </div>
                </ModalWithHeader>
            </div>
        )
    }
}
