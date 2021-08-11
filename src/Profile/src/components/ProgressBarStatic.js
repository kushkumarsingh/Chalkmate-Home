import React from 'react';

export default class ProgressBarStatic extends React.Component {
    render() {
        return (
            <div style={{ display: 'flex'}}>
                <div style={{width: 80}}>
                    <p style={{fontSize: 17, color: '#555555', fontWeight: this.props.weight, margintop: 10, marginBottom: this.props.marginBottom || 10}}>{this.props.title}</p>
                </div>
                <div style={{ alignSelf: 'center', margin: 10, textAlign: 'right'}}>
                    <div style={{ backgroundColor: this.props.bgcolor, height: 15, borderRadius: 15, width: 200 }}>
                        <div style={{ backgroundColor: this.props.fg, height: 15, borderRadius: 15, width: this.props.progress * 2 }}></div>
                    </div>

                </div>
            </div>
        )
    }
}