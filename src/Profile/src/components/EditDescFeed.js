import React from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modals/Modal'
import EditProfile from './Modals/EditProfile'

import styles from '../Profile.module.css'

export default class EditDescFeed extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            edit: false,
            showMenu: false
        }
    }


    changeEdit(edit) {
        this.setState({ edit: edit })
    }







    render() {
        return (
            <div
                className={styles.desc}
                style={{
                    boxShadow: '0px 0px 20px #5555551a',
                    padding: 10,
                    borderRadius: 10,
                    display: 'flex',
                    flexDirection: 'column',
                    paddingBottom: 0
                }}
            >
                <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div
                        style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'center'
                        }}
                    >
                        <img
                            src="Image/Icons/badge.svg"
                            alt=" "
                            height="32px"
                        />
                    </div>
                    <div>
                        <p style={{ margin: 0, marginLeft: 10, fontSize: 17, fontWeight: 600, color: '#000' }}>Vijaya Bajpai</p>
                    </div>
                </div>
                <br />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderBottom: '1px solid #5555555A',
                        paddingBottom: 24
                    }}
                >
                    <p
                        className={styles.section_desc}
                    // style={{
                    //     margin: 0,
                    //     fontSize: 14,
                    //     marginTop: 5
                    // }}
                    >
                        Director-Corporate Affairs <br />| J kakehasti Services Pvt Ltd.
                    </p>
                    <img src="Image/location.svg" alt=" " style={{ marginTop: 10 }} />

                    <p
                        className={styles.section_desc}
                        style={{
                            fontSize: 14,
                            margin: 5
                        }}
                    >Kolkata, West Bengal, India</p>
                    <p style={{ fontSize: 14, fontWeight: 600, color: '#236AE8', margin: 5 }}>500+ Connections</p>

                    <div
                        style={{ position: 'relative' }}
                    >
                        <Link to="/templates/choose" ><p style={{ fontWeight: 600, fontSize: 14, margin: 0, color: '#236AE8' }}
                            onClick={() => {
                                document.body.style.overflow = 'hidden'
                            }}
                        ><u>Short Bio</u></p></Link>
                    </div>
                </div>
                {
                    this.props.editpage ?
                        <div
                            style={{ cursor: 'pointer' }}
                            onClick={() => {
                                this.changeEdit(true)
                                document.body.style.overflow = 'hidden'
                            }}
                        >
                            <p style={{ textAlign: 'center', fontSize: 12, textTransform: 'uppercase', fontWeight: 600, color: '#555555', margin: 23 }}>edit profile</p>

                        </div>
                        :
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <div
                                // className="profileButn"
                                style={{ cursor: 'pointer' }}
                            >
                                <p style={{ textAlign: 'center', fontSize: 12, textTransform: 'uppercase', fontWeight: 600, color: '#555555', margin: 23 }}>add</p>

                            </div>
                            <div
                                className={styles.editdescfeed_dropdown}
                                style={{ cursor: 'pointer' }}
                            >
                                <div
                                    className={styles.editdescfeed_dropbtn}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <p style={{ textAlign: 'center', fontSize: 12, textTransform: 'uppercase', fontWeight: 600, color: '#555555', margin: 23 }}>open to</p>

                                </div>
                                <div className={styles.editdescfeed_dropdown_content}>
                                    <a href="">Share Profile in a message</a>
                                    <a href="">Save to pdf</a>
                                </div>
                            </div>
                            <div
                                className={styles.editdescfeed_dropdown}
                                style={{ cursor: 'pointer' }}
                            >
                                <div
                                    className={styles.editdescfeed_dropbtn}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <p style={{ textAlign: 'center', fontSize: 12, textTransform: 'uppercase', fontWeight: 600, color: '#555555', margin: 23 }}>more</p>

                                </div>
                                <div className={styles.editdescfeed_dropdown_content}>
                                    <a href="">Share Profile in a message</a>
                                    <a href="">Save to pdf</a>
                                </div>
                            </div>
                        </div>

                }

                {
                    this.state.edit ?
                        <Modal card={<EditProfile
                            // id={this.state.id}
                            title="Edit Profile"
                            // heading={this.state.heading}
                            // subheading={this.state.subheading}
                            // desc={this.state.desc}
                            // add={this.state.add}
                            // changeStates={this.changeStates.bind(this)}
                            changeEdit={this.changeEdit.bind(this)}
                        />} />

                        :
                        null
                }
            </div>
        )
    }
}