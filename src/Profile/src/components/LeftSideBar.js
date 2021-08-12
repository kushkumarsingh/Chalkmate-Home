import React from 'react';

import DpicFeed from './DpicFeed';
import EditDescFeed from './EditDescFeed';
import SocailFeed from './SocialFeed';
import IconSectionFeed from './IconSectionFeed';
import StatsFeed from './StatsFeed';

import styles from '../Profile.module.css'

export default class LeftSideBar extends React.Component {
    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%'
                }}
            >
                <div
                    style={{
                        width: '100%'
                    }}
                >
                    <DpicFeed props={this.props}/>
                </div>

                <div
                    style={{
                        width: '100%'
                    }}
                >
                    <EditDescFeed editpage={this.props.props.editpage}/>
                    <br />
                    <br />
                </div>

                <div
                    style={{
                        width: '100%'
                    }}
                >
                    <SocailFeed editpage={this.props.props.editpage}/>
                    <br />
                    <br />
                </div>
                    
                <div
                    style={{
                        width: '100%'
                    }}
                >
                    <StatsFeed editpage={this.props.props.editpage}/>
                </div>

                <div

                    className={styles.icon_section_feed}
                    style={{
                        width: '100%'
                    }}
                >
                    <IconSectionFeed />
                </div>


            </div>
        )
    }
}