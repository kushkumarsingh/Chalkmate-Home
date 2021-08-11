import React from 'react';

export default class ExpTimelineVerticalTemp4 extends React.Component {
    render() {
        return (
            <div
                style={{
                    marginTop: 0,
                    borderLeft: '5px solid #e6e8e8',
                    borderRadius: 2,
                }}
            >
                {
                    this.props.data.slice(0, 3).map((edval, index) => {
                        return (
                            <div style={{ margin: '0 20px 30px 40px'}}>

                                <div style={{ marginBottom: "1em" }}>
                                    <p style={{ color: this.props.durationColor || "#626262", fontSize: 15, fontWeight: this.props.durationWeight || 500 }}>{edval.time}</p>
                                </div>
                                <div
                                    style={{
                                        backgroundColor: index == 2 ? "#6564db" : edval.color,
                                        height: index == 2 ? 35 : 20, width: index == 2 ? 35 : 20,
                                        borderRadius: 50,
                                        marginBottom: index==2 ? "1em":"2em",
                                        position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center',
                                        marginLeft: index == 2 ? -59 : -52
                                    }}
                                >
                                    {
                                        index == 2 ?
                                            <div
                                                style={{
                                                    borderRadius: 15,
                                                    padding: 5,
                                                    backgroundColor: '#fff'
                                                }}
                                            />
                                            :
                                            null
                                    }
                                </div>

                                <div
                                    style={{
                                        marginTop: -60
                                    }}
                                >
                                    <p style={{ color: "#626262", fontSize: 16, fontWeight: 600 }}>{edval.title}</p>
                                </div>
                                <div>
                                    <p style={{ color: "#626262", fontSize: 15, lineHeight: 1.3, fontWeight: 500 }}>{edval.description}</p>
                                </div>
                            </div>


                        )
                    })
                }
            </div>
        )
    }
}

const styles = {

    li: {
        margin: 0,
        color: '#236ae8',
        fontSize: 40,
        display: 'flex',
        alignItems: 'center',
        marginLeft: -5,
        marginBottom: 20
        // zIndex: 10
    },

    lihead: {
        color: '#7d7d7d',
        margin: 0,
        fontSize: 15,
        fontWeight: 500,
        lineHeight: 1.5
    },

    lidesc: {
        color: '#606060',
        margin: '0px 0px 0px 0px',
        fontSize: 19,
        fontWeight: 600,
        lineHeight: 1.5
    }
}

