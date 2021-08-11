import React from 'react';
import desc from './desc'

export default class TitleColorTemp3 extends React.Component {
    render() {
        return (
            <div
                style={{
                    backgroundColor: '#E5E5E5',
                    display: 'flex',
                    justifyContent: this.props.justifycontent,
                    borderTopRightRadius: this.props.dir == 'left' ? 50 : 0,
                    borderBottomRightRadius: this.props.dir == 'left' ? 50 : 0,

                    borderTopLeftRadius: this.props.dir == 'right' ? 50 : 0,
                    borderBottomLeftRadius: this.props.dir == 'right' ? 50 : 0,

                }}
            >
                <div
                    style={{
                        backgroundImage: `linear-gradient(to right, ${this.props.bgcolor[0]} , ${this.props.bgcolor[1]})`,
                        padding: '0px 20px 0px 40px',
                        margin: 5,
                        borderRadius: 50,
                        boxShadow: '0px 0px 10px #969696',
                        width: 300
                    }}
                >
                    <p
                        style={{
                            fontSize: 20,
                            fontWeight: 600,
                            color: '#fff',
                            textAlign: 'left',
                            margin: '25px 200px 25px 0px'
                        }}
                    >{this.props.title}</p>
                </div>
            </div>
        )
    }
}