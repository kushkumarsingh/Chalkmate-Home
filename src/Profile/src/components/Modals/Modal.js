import React from 'react'

import styles from '../../Profile.module.css'

export default class Modal extends React.Component {
    render() {
        return (
            <div
                id={styles.scroll_div}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    display: 'flex',
                    alignItems: this.props.alignItems || 'center',
                    justifyContent: this.props.justifyContent || 'center',
                    zIndex: 999,
                    position: 'fixed',
                    overflowY: this.props.scroll || 'scroll',
                    scrollbarWidth: 'none'

                }}
            >
                {this.props.card}
            </div>
        )
    }
}