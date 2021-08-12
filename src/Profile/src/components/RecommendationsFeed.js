import React from 'react'

import styles from '../Profile.module.css'

export default class RecommendationsFeed extends React.Component {
    render() {
        return (
            <div>
                <div
                    className={styles.profile_title}
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
                                <img className={styles.inner_icon} src="Image/Chalkmate_Recommendation.svg" alt=" " />
                            </div>
                            <div>
                                <p className={styles.icon_text} >Recommendations</p>
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
                    <div style={{
                        padding: 20,
                        borderBottom: '1px solid #5555551A',

                    }}>



                        <div style={{ borderBottom: '1px solid #5555555A', paddingBottom: 15 }}>
                            <div style={{ display: 'flex' }}>
                                <div>
                                    <img
                                        src="Image/dummy/avatar6.png"
                                        height="50px"
                                        width="50px"
                                        style={{ borderRadius: 40, marginRight: 15 }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                                    <div>
                                        <p className={styles.section_title}>Andrew Saunders <br /><span className={styles.followers}>global head of entrainment & culture marketing.</span></p>

                                    </div>

                                    <p className={styles.followers} style={{ opacity: 0.7, color: '#555555', marginBottom: 6 }}>Jan 2011 - Nov 2015</p>
                                    <p className={styles.section_desc}>
                                        Intensive, 6 week business program for liberal arts majors at the #1 ranked undergraduate business & accounting school Studied Accounting, Finance, Marketing, Information Technology, Entrepreneurship, the Legal Environment of Business, Business Strategy, Quantitative Analysis, Business Life, and a Business Simulation Earned 1st place in the cumulative business simulation competition (which emphasized marketing strategy and encompassed the disciplines mentioned above)
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div
                            style={{
                                marginTop: 20
                            }}
                        >
                            <div style={{ display: 'flex' }}>
                                <div>
                                    <img
                                        src="Image/dummy/avatar1.png"
                                        height="50px"
                                        width="50px"
                                        style={{ borderRadius: 40, marginRight: 15 }}
                                    />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

                                    <div>
                                        <p style={{ margin: 0, color: '#000', fontWeight: 600 }}>Net Jacobsson<br /><span style={{ fontSize: 12, fontWeight: 600, color: '#555555' }}>Entrepreneur</span></p>
                                    </div>

                                    <p className={styles.followers} style={{ opacity: 0.7, color: '#555555', marginBottom: 6 }}>Jan 2011 - Nov 2015</p>
                                    <p className={styles.section_desc}>
                                        Intensive, 6 week business program for liberal arts majors at the #1 ranked undergraduate business & accounting school. Studied Accounting, Finance, Marketing, Information Technology,
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: 10 }}>
                        <btn style={{ fontSize: 12, fontWeight: 600, color: '#555555', margin: 10 }}>SEE ALL</btn>
                    </div>
                </div>
            </div>
        )
    }
}