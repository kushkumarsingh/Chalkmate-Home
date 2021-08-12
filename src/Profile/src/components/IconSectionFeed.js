import React from 'react'

import styles from '../Profile.module.css'

export default class IconSectionFeed extends React.Component {

    feedTitle = ["About", "Featured", "Interests", "Experience", "Education", "Licenses and Certifications", "Volunteer Experience", "Skills and endorsements", "Recommendations", "Achievements"]

    feedTitleImages = ["Image/Icons/about.svg",
        "Image/Icons/education.svg",
        "Image/Icons/intrests.svg",
        "Image/Icons/experience.svg",
        "Image/Icons/education.svg",
        "Image/certifications.svg",
        "Image/Chalkmate_Volunteer.svg",
        "Image/Icons/skills.svg",
        "Image/Chalkmate_Recommendation.svg",
        "Image/Chalkmate_Achievement.svg"
    ]


    render() {
        return (
            <div>


                <div>
                    {
                        this.feedTitle.map((title, idx) => {
                            return (

                                <div
                                    className={styles.profile_title}
                                    style={{ marginBottom: 10 }}
                                >
                                    <a
                                        href={`#${title}`}
                                        style={{
                                            cursor: 'pointer',
                                            textDecoration: 'none',
                                            color: '#000'
                                        }}
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
                                                    <img className={styles.inner_icon} src={this.feedTitleImages[idx]} alt=" " />
                                                </div>
                                                <div>
                                                    <p className={styles.icon_text}>{title}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}