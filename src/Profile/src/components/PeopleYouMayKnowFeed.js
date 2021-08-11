import React from 'react'

export default class PeopleYouMayKnow extends React.Component {
    render() {
        return (
            <div class="people-div">

                <div
                    class="profile-title"
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

                            <div class="icon-container">
                                <img class="inner-icon" src="Image/Icons/about.svg" alt=" " />
                            </div>
                            <div>
                                <p class="icon-text">People You May Know</p>
                            </div>
                        </div>
                    </div>
                </div>
                <br />

                <div
                    class="desc"
                    style={{
                        boxShadow: '0px 0px 20px #5555551a',
                        padding: 10,
                        borderRadius: 10,

                    }}
                >

                    {
                        Array.from({ length: 4 }).map(() => {
                            return (
                                <div class="col interestIndividual" >
                                    <div class="hovme" style={{ display: 'flex', justifyContent: 'space-between' }}>
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
                                            <div className="mar0" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                                <p class="hovmep section-title">Ananya Chandra</p>
                                                <p class="followers">Founder and CEO</p>
                                                <p class="followers">Women Prosperity Lab</p>
                                            </div>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center'}}>
                                            <div class="hov" style={{ height: 40, width: 40, borderRadius: 100, border: '1px solid #236AE8', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}><p class="pilus" style={{ margin: 0, fontSize: 30 }}>+</p></div>
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