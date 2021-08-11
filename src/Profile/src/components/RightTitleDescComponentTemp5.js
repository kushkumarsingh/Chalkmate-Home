import React from 'react'
import BoldIconTemp5 from './BoldIconTemp5'


export default class RightTitleDescComponentTemp5 extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <BoldIconTemp5 bgcolor={this.props.bgcolor} icon={this.props.icon} />
                </div>
                {this.props.icon}
                <h2 style={styles.h2title}>{this.props.title}</h2>

                {
                    this.props.desclist.slice(0, 2).map((item) => {
                        return (
                            <div>
                                <p
                                    style={{
                                        margin: 0,
                                        marginTop: 20,
                                        fontSize: 16,
                                        fontWeight: 600,
                                        color: '#8c8c8c'
                                    }}
                                >{item.title}</p>
                                <p
                                    style={{
                                        marginTop: 0,
                                        marginBottom: 5,
                                        fontSize: 13,
                                        fontWeight: 500,
                                        color: '#abaaa8'
                                    }}
                                >{item.description}</p>
                                <p
                                    style={{
                                        margin: 0,
                                        marginTop: 0,
                                        fontSize: 13,
                                        fontWeight: 600,
                                        color: '#abaaa8'
                                    }}
                                >{item.time}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const styles = {
    h2title: {
        color: '#555452',
        fontSize: 20,
        margin: 0
    }
}