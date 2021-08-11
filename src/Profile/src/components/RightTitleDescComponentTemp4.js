import React from 'react';

export default class RightTitleDescComponentTemp4 extends React.Component {
    render() {
        return (
            <div
                style={{
                    marginLeft: -30
                }}
            >
                <div
                    style={{
                        backgroundColor: '#23e6e8',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        borderTopRightRadius: 50,
                        borderBottomRightRadius: 50,
                        marginRight: 60,
                        marginBottom: 20
                    }}
                >

                    <div
                        style={{
                            padding: 20,
                            marginLeft: 30
                        }}
                    >

                        <p
                            style={{
                                margin: 0,
                                fontSize: 17,
                                padding: '0px 20px 0px 20px',
                                color: '#000000',
                                fontWeight: 600,
                            }}
                        >{this.props.title}</p>
                    </div>
                </div>
                

            </div>
        )
    }
}