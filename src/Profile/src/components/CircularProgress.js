import React from 'react';

export default class CircularProgress extends React.Component {
    render () {
        return (
            <div style={{ display: 'flex'}}>
                <div style={{width: 80}}>
                    <p style={{fontSize: 15, color: '#555555', fontWeight: this.props.weight}}>{this.props.title}</p>
                </div>
                <div style={{ alignSelf: 'center', margin: 10, textAlign: 'right', display: 'flex'}}>

                    {
                        [1,2,3,4,5].map((item, _)=> {
                            return (
                                <div
                                    style={{
                                        backgroundColor: Math.round(this.props.progress/20)>=item?this.props.fg:'#e1e1e1',
                                        height: 15, width: 15,
                                        borderRadius: 200,
                                        margin: '0px 20px 0px 0px'
                                    }}
                                ></div>
                            ) 
                        })
                    }

                </div>
            </div>
        )
    }
}