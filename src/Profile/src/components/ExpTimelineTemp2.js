import React from 'react';

export default class ExpTimelineTemp2 extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div id="timeline" style={{backgroundColor: '#236AE8', height:8, minWidth:'72em', position: 'absolute', marginTop: '4.2em', zIndex: 10, borderRadius: 8}} />

                {/* <div style={{ backgroundColor: '#236ae8', height: 10, width: '84em', position: 'absolute', right: 100, left: 100, marginTop: '4.3em', borderRadius: 100 }}></div> */}
                {
                    this.props.data.map((edval, index) => {
                        return (
                            <div style={{ textAlign: 'center', width: 300}}>

                                <div style={{ marginBottom: "1em" }}>
                                    <p style={{ color: "#626262", fontSize: 15 }}>{edval.time}</p>
                                </div>
                                <div style={{zIndex: 20, backgroundColor: '#23e6e8', height: 45, width: 45, borderRadius: 50, marginBottom: "2em", margin: '0 auto', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    {
                                        index == this.props.data.length-1 ?
                                            <div
                                                style={{
                                                    borderRadius: 15,
                                                    padding: 9, 
                                                    backgroundColor: '#236ae8',
                                                    zIndex: 20 
                                                }}
                                            />
                                            :
                                            null
                                    }
                                </div>

                                <div>
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