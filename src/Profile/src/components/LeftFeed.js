import React from 'react';



import AboutFeed from './AboutFeed';
import FeaturedFeed from './FeaturedFeed';
import InterestsFeed from './InterestsFeed';
import ExperienceFeed from './ExperienceFeed';
import EducationFeed from './EducationFeed';
import LicencesFeed from './LicencesFeed';
import VolunteerFeed from './VolunteerFeed';
import EndorsementsFeed from './EndorsmentsFeed';
import RecommendationsFeed from './RecommendationsFeed';
import AchievementsFeed from './AchievementsFeed';
import MidDpicFeed from './MidDpicFeed';
import EditDescFeed from './EditDescFeed';
import SocailFeed from './SocialFeed';

import styles from '../Profile.module.css'

export default class LeftFeed extends React.Component {
    render() {
        return (
            <div
                style={{
                    position: 'relative',
                    justifyContent: 'center'
                }}
            >

                <div
                    id={styles.leftbar_hamburger_view}
                    style={{
                        marginTop: -120

                    }}
                >
                    <div
                        className={styles.dpic_inside_ham}
                    >
                        <MidDpicFeed props={this.props}  />

                    </div>
                    <EditDescFeed />
                    <br />
                    <SocailFeed />
                    <br />
                    <br />

                </div>

                <div id="About" style={{ scrollMarginTop: 120 }}>
                    <AboutFeed editpage={this.props.editpage}/>
                </div>

                <br />
                <br />

                <div id="Featured" class={styles.Featured} style={{ scrollMarginTop: 120 }}>

                    <FeaturedFeed editpage={this.props.editpage}/>
                </div>

                <br />
                <br />
                <div id="Interests" style={{ scrollMarginTop: 120 }}>

                    <InterestsFeed editpage={this.props.editpage}/>
                </div>

                <br />
                <br />

                <div id="Experience" style={{ scrollMarginTop: 120 }}>

                    <ExperienceFeed editpage={this.props.editpage}/>
                </div>

                <br />
                <br />

                <div id="Education" style={{ scrollMarginTop: 120 }}>

                    <EducationFeed editpage={this.props.editpage}/>
                </div>

                <br />
                <br />

                <div id="Licenses and Certifications" style={{ scrollMarginTop: 120 }}>

                    <LicencesFeed editpage={this.props.editpage}/>
                </div>

                <br />
                <br />

                <div id="Volunteer Experience" style={{ scrollMarginTop: 120 }}>

                    <VolunteerFeed editpage={this.props.editpage}/>
                </div>

                <br />
                <br />

                <div id="Skills and endorsements" style={{ scrollMarginTop: 120 }}>
                    <EndorsementsFeed editpage={this.props.editpage}/>

                </div>

                <br />
                <br />

                <div id="Recommendations" style={{ scrollMarginTop: 120 }}>

                    <RecommendationsFeed />
                </div>

                <br />
                <br />

                <div id="Achievements" style={{ scrollMarginTop: 120 }}>

                    <AchievementsFeed editpage={this.props.editpage}/>
                </div>

                <br />
                <br />

            </div>
        )
    }
}