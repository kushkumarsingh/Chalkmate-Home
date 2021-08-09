import React, { Component } from 'react';
import { ModalWithoutHeader } from '../shared/ui/Modal/Modal';
import styles from './css/premium.module.css';
import Diamond from './images/diamond.svg';

export default class premiumModal extends Component {
    render() {
        return (
            <div>
                <ModalWithoutHeader maxWidth = {this.props.maxWidth} closeHandler = {this.props.closeModal} show={this.props.show}>
                    <div className={styles.outerContainer}>
                        <div className={styles.comingSoon}>
                            Coming Soon
                        </div>
                        <span onClick = {this.props.closeModal} className={styles.close}>
                            X
                        </span>
                        <div className={styles.bottomContainer}>
                            <img className={styles.diamond} src={Diamond} />
                            <h2 className={styles.title}>Chalkmate Premium</h2>
                            <p className={styles.desc}>
                                We recommend adding people now so they can start participating in your class
                            </p>
                        </div>
                    </div>
                </ModalWithoutHeader>
            </div>
        )
    }
}
