import React from 'react'
import styles from '../Profile.module.css'


export default class StatsFeed extends React.Component {
    render() {
        return (
            <div>

                <div
                    className={`${styles.title} ${styles.left_side_dashicon}`}
                    style={{ marginBottom: 10 }}
                >

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: "0px 20px",
                            alignItems: 'center'
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <div className={styles.icon_container}>
                                <img className={styles.inner_icon} src="Image/Icons/experience.svg" alt=" " />
                            </div>
                            <div>
                                <p className={styles.icon_text}>Dashboard</p>
                            </div>
                        </div>
                    </div>
                </div>

                {
                    this.props.editpage ?

                        <div>
                            <div
                                className={styles.desc}
                                style={{
                                    boxShadow: '0px 0px 20px #5555551a',
                                    padding: 10,
                                    borderRadius: 10,

                                }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #e2e2e2', paddingBottom: 10, justifyContent: 'space-between' }}>
                                    <div>
                                        <p
                                            style={{
                                                margin: 0, fontSize: 16, padding: "10px 0px", fontWeight: 600, color: '#236AE8'
                                            }}
                                        >35</p>
                                        <p
                                            style={{
                                                margin: 0, fontSize: 12,
                                                color: '#555555', fontWeight: 600
                                            }}
                                        >Who Viewed your Profile</p>
                                    </div>
                                    <div className={styles.col_5}>
                                        <img
                                            src="Image/Icons/sidechart1.png"
                                            alt=" "
                                            height={80}
                                        />
                                    </div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>

                                    <div>
                                        <p
                                            style={{
                                                margin: 0, fontSize: 16, padding: "10px 0px", fontWeight: 600, color: '#236AE8'
                                            }}
                                        >316</p>
                                        <p
                                            style={{
                                                margin: 0, fontSize: 12,
                                                color: '#555555', fontWeight: 600
                                            }}
                                        >Search appearences</p>
                                    </div>
                                    <div>
                                        <img
                                            src="Image/Icons/sidechart2.png"
                                            alt=" "
                                            height={80}
                                        />
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                        :
                        null
                }


            </div>
        )
    }
}