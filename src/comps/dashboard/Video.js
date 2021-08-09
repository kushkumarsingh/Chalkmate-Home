import React, { Component } from 'react'

export default class Video extends Component {
    render() {
        return (
            <div>
                <video width="100%" controls autoPlay loop muted>
                    <source src={this.props.src} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
        )
    }
}
