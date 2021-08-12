
import React from 'react'
import RightFeed from '../RightFeed'

import styles from '../../Profile.module.css'

export default class HamburgerView extends React.Component {



    render() {



        return (
            <div
                id={styles.hamburger_card}
                style={{
                    backgroundColor: '#fff',
                    height: '100%', 
                    overflowY: 'scroll',
                    scrollbarWidth: 'none',

                }}
            >

                <div id={styles.header}
                    style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}
                >
                    <div
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        {/* <img src="./assets/add.svg" height={30} /> */}
                        <p Name={styles.modal_title}></p>
                    </div>
                    <div
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            this.props.changeEdit('none')
                            document.body.style.overflow = 'visible'
                        }}
                    >
                        <img src="./assets/cross.svg" height={30} />
                    </div>
                </div>


                <div
                    id={styles.scroll_div}
                    style={{
                        // height: '100%',
                        // overflow: 'scroll',
                        // padding: 3,
                    }}
                >
                    <div
                        style={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <RightFeed />
                    </div>
                </div>

            </div>
        )
    }
}