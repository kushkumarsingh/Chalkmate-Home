import React from 'react';
//components
import LeftFeed from '../components/LeftFeed';
import LeftSideBar from '../components/LeftSideBar';
import RightFeed from '../components/RightFeed';
import CoverFeed from '../components/CoverFeed';

import Modal from '../components/Modals/Modal';
import HamburgerView from '../components/Modals/HamburgerView';


import styles from '../Profile.module.css'
// import { StylesProvider } from '@material-ui/core';

export default class Feed extends React.Component {

    state = {
        dpfileloc: './assets/default-user.png'
    }

    changeEdit(edit) {
        document.getElementById('hamburger-view').style.display = edit
    }

    // getUpdatedDp () {
    //     return this.state.dpfileloc
    // }

    updateDp (fileloc) {
        this.setState({dpfileloc: fileloc})
    }

    render() {
        return (
            <div

                style={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <div
                    className={styles.left_side_bar}
                >
                    <LeftSideBar dpfileloc={this.state.dpfileloc} updateDp={this.updateDp.bind(this)} props={this.props}/>
                </div>
                <div
                    class={styles.cover_feed}
                    style={{
                    }}
                >
                    <CoverFeed editpage={this.props.editpage}/>

                    <div
                        style={{
                            display: 'flex',
                            flex: 1
                        }}
                    >
                        <div
                            class={styles.left_feed}
                            style={{
                                margin: "15px 10px",
                            }}
                        >
                            <LeftFeed dpfileloc={this.state.dpfileloc} updateDp={this.updateDp.bind(this)} editpage={this.props.editpage}/>
                        </div>
                        <div
                            class={styles.right_feed}
                            style={{
                                margin: 10,
                            }}
                        >
                            <RightFeed editpage={this.props.editpage} />
                        </div>
                        <div
                            id="hamburger-view"
                            // className={styles.right_feed}
                            style={{
                                position: 'absolute'
                            }}
                        >
                            <Modal card={<HamburgerView changeEdit={this.changeEdit.bind(this)} />} justifyContent="flex-end" scroll="none"/>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}