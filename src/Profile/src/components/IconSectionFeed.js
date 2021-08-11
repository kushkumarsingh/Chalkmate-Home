import React from 'react'

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
                                    class="profile-title"
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


                                                <div class="icon-container">
                                                    <img class="inner-icon" src={this.feedTitleImages[idx]} alt=" " />
                                                </div>
                                                <div>
                                                    <p class="icon-text">{title}</p>
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