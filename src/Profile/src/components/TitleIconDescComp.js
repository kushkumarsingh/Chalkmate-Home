import React from 'react';
// import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
// import './TitleIconDescComp.css';

export default class TitleIconDescComp extends React.Component {


    render() {
        return (
            <div style={{ display: 'flex' }} id='tidctop' >
                <div style={{ alignSelf: 'center', marginRight: 10 }} id='tidcinnerfirst' >
                    <div style={{ padding: "8px 8px 8px 8px", backgroundColor: this.props.iconbgcolor || '#236AE8', borderRadius: 8, alignItems: 'center', display: 'flex' }} id='tidcinsideinnerfirst'>
                        <img src={this.props.src} style={{ height: this.props.iconSize || 20}} id='tidcimg'/>
                    </div>
                </div>
                <div style={{ alignSelf: 'center', width: 130, padding: '12px 0px 12px 0px'}} id='tidcinnersecond'>
                    <p style={{ color: this.props.descColor, fontSize: this.props.descSize, margin: 0 }} id='tidcdesc'>{this.props.desc}</p>
                    <p style={{ color: this.props.titleColor, fontWeight: 800, fontSize: this.props.titleSize, margin: 0 }} id='tidctitle'>{this.props.title}</p>
                </div>
            </div>
        )
    }
}
