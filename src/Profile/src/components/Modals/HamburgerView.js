
import React from 'react'
import RightFeed from '../RightFeed'

export default class HamburgerView extends React.Component {



    render() {



        return (
            <div
                id="hamburger-card"
                style={{
                    backgroundColor: '#fff',
                    // position:'relative',
                    height: '100%', 
                    overflowY: 'scroll',
                    scrollbarWidth: 'none',
                    // paddingBottom: 5

                }}
            >

                <div id="header"
                    style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}
                >
                    <div
                        style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                    >
                        {/* <img src="./assets/add.svg" height={30} /> */}
                        <p class="modal-title"></p>
                    </div>
                    <div
                        style={{
                            justifyContent: 'center',
                            alignItems: 'center',
                            display: 'flex',
                            cursor: 'pointer'
                        }}
                        onClick={() => {
                            this.props.changeEdit('none')
                            document.body.style.overflow = 'visible'
                        }}
                    >
                        <img src="./assets/cross.svg" height={30} />
                    </div>
                </div>


                <div
                    id="scroll-div"
                    style={{
                        // height: '100%',
                        // overflow: 'scroll',
                        // padding: 3,
                    }}
                >
                    <div
                        style={{
                            position: 'relative',
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column'
                        }}
                    >
                        <RightFeed />
                    </div>
                </div>

            </div>
        )
    }
}