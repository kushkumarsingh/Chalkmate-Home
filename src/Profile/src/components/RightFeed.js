import React from 'react';
import CorouselFeed from './CorouselFeed';
import PeopleYouMayKnow from './PeopleYouMayKnowFeed';
import UpskillingFeed from './UpskillingFeed';
// import {} from '../'
import styles from '../Profile.module.css'

export default class RightFeed extends React.Component {
    render() {
        return (
            <div>
                <div class={styles.rightSide}>

                    <CorouselFeed />

                    <br />

                    <PeopleYouMayKnow />
                    
                    <br />
                    <br />

                    <UpskillingFeed />
                    
                </div>
            </div>
        )
    }
}