import React from 'react';

export default class TimeTitleDescComp extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div id="timeline" style={{backgroundColor: '#E5E7E7', height:8, width:'68em', position: 'absolute', marginTop: '3.3em', zIndex: -1, borderRadius: 8}} />
                {
                    this.props.data.map((edval) => {
                        return (
                            <div>

                                <div style={{marginBottom: "1em", paddingRight: '2em'}}>
                                    <p style={{color: "#555555", fontSize: 15}}>{edval.time}</p>
                                    
                                </div>
                                <div style={{backgroundColor: edval.color, height:15, width: 15, borderRadius: 8, marginBottom: "2em"}}></div>
                                <div>
                                    <p style={{color: "#000", fontSize: 15, fontWeight: 600}}>{edval.title}</p>
                                </div>
                                <div style={{paddingRight: '2em'}}>
                                    <p style={{color: "#555555", fontSize: 15}}>{edval.description}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}