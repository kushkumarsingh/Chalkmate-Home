import React from 'react'

export default class UpskillingFeed extends React.Component {

    contentImages = [
        "Image/upskilling1.png",
        "Image/upskilling2.png",
        "Image/upskilling3.png",
        "Image/upskilling4.png",
        "Image/upskilling4.png",
        "Image/upskilling4.png"
    ]

    render() {
        return (
            <div>
                <div
                    class="profile-title"
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
                                <img class="inner-icon" src="Image/Icons/learning.svg" alt=" " />
                            </div>
                            <div>
                                <p class="icon-text">Upskilling and Reskilling</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div
                    class="desc"
                    style={{
                        boxShadow: '0px 0px 20px #5555551a',
                        padding: 20,
                        borderRadius: 10,
                        display: 'flex',
                        justifyContent: 'center',

                    }}
                >
                    <div style={{ marginTop: 10, display: 'flex', flexWrap: 'wrap' }}>
                        {
                            this.contentImages.map((img, idx) => {
                                return (
                                    <div

                                        style={{ width: "50%", cursor: 'pointer' }}
                                    >
                                        <div
                                            class="up"
                                            style={{
                                                width: "100%",
                                                marginTop: idx == 0 || idx == 1 ? 0 : 20
                                            }}>

                                            <div
                                                style={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    paddingTop: 5
                                                }}
                                            >
                                                <img src={img} style={{ width: '90%', height: 'auto' }} />
                                            </div>
                                            <div
                                                class="up-desc"
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'center',
                                                    padding: 5
                                                }}
                                            >
                                                <p
                                                    class="followers"
                                                    style={{
                                                        fontSize: 12,
                                                        fontWeight: 600,
                                                        marginTop: 5
                                                    }}>Digital Marketting Foundation
                                                </p>
                                                <p style={{
                                                    fontSize: 12,
                                                    fontWeight: 600,
                                                    opacity: 0.8,
                                                    margin: 0

                                                }}><i>10,014 viewers</i></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}