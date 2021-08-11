import React from 'react'

export default class BoldIconTemp5 extends React.Component {
    render() {
        return (
            <div
                style={{
                    borderRadius: 100,
                    backgroundColor: '#f5fdfd',
                    width: 50,
                    height: 50,
                    padding: 12,
                    boxShadow: '0px 0px 10px #969696'

                }}
            >
                <div
                    style={{
                        backgroundColor: this.props.bgcolor,
                        // padding: 10,
                        borderRadius: 100,
                        width: 50,
                        height: 50,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'

                    }}
                >
                    {this.props.icon}
                </div>
            </div>
        )
    }
}