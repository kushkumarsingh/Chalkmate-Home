import React from 'react'

import styles from '../Profile.module.css'

export default class PeopleYouMayKnow extends React.Component {
    render() {
        return (
            <div className="people-div">

                <div
                    className={styles.profile_title}
                >

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            padding: "0px 20px",
                            alignItems: 'center',
                            
                        }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >

                            <div className={styles.icon_container}>
                                <img className={styles.inner_icon} src="Image/Icons/about.svg" alt=" " />
                            </div>
                            <div>
                                <p className={styles.icon_text}>People You May Know</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div
                    className={styles.desc}
                    style={{
                        boxShadow: '0px 0px 20px #5555551a',
                        padding: 10,
                        borderRadius: 10,

                    }}
                >

                    {
                        Array.from({ length: 4 }).map(() => {
                            return (
                                <div className={`${styles.col} ${styles.interestIndividual}`}>
                                    <div className="hovme" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <div
                                            style={{
                                                display: 'flex'
                                            }}
                                        >
                                            <div>
                                                <img
                                                    src="Image/circle-image.png"
                                                    height="50px"
                                                    width="50px"
                                                    style={{ borderRadius: 40, margin: '5px 10px 5px 10px' }}
                                                />
                                            </div>
                                            <div className={styles.mar0} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                <p className={`${styles.hovmep} ${styles.section_title}`}>Ananya Chandra</p>
                                                <p className={styles.followers}>Founder and CEO</p>
                                                <p className={styles.followers}>Women Prosperity Lab</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center'}}>
                                            <div className={styles.hov} style={{ height: 40, width: 40, borderRadius: 100, border: '1px solid #236AE8', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}><p className={styles.pilus} style={{ margin: 0, fontSize: 30 }}>+</p></div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        )
    }
}