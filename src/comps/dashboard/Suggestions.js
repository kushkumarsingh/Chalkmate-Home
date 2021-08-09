import React, { Component } from 'react'
import SuggestionCard from './SuggestionCard'
import styles from './suggestions.module.css'
// import Settings from './images/settings.svg'
import Image1 from './images/suggestions1.png';
import Pic1 from './images/sampleProfilePic1.png';
import Image2 from './images/suggestions2.png';
import Pic2 from './images/sampleProfilePic2.png';
import Image3 from './images/suggestions3.png';
import Pic3 from './images/sampleProfilePic3.png';
import Right from './images/chevron-right.svg';
import Left from './images/chevron-left.svg';
import { createRef } from 'react';

export default class Suggestions extends Component {
    ref= createRef();
    scrollLeft = () => {
        // alert("Go left");
        this.ref.current.scrollLeft -= 235;
    }
    scrollRight = () => {
        // alert("Go right");
        this.ref.current.scrollLeft += 235;
    }
    render() {
        return (
            <div>
                <div className={styles.settingsContainer}>
                    {/* <img src={Settings} style={{position:'absolute', right:0}}/> */}
                    <img src={Left} onClick={this.scrollLeft} style={{position:'absolute', right:'38px', cursor:'pointer'}}/>
                    <img src={Right} onClick={this.scrollRight} style={{position:'absolute', right:0, cursor:'pointer'}}/>
                </div>
                <div ref={this.ref} className={styles.container}>
                    <SuggestionCard 
                        Background={Image1}
                        Pic={Pic1}
                    />

                    <SuggestionCard 
                        Background={Image2}
                        Pic={Pic2}
                    />

                    <SuggestionCard 
                        Background={Image3}
                        Pic={Pic3}
                    />

                    <SuggestionCard 
                        Background={Image3}
                        Pic={Pic3}
                    />

                    <SuggestionCard 
                        Background={Image3}
                        Pic={Pic3}
                    />
                </div>
            </div>
        )
    }
}
