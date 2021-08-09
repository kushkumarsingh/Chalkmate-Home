import React, { Component } from 'react';
import styles from './suggestionCard.module.css';
import Image1 from './images/suggestions1.png';
import Pic from './images/sampleProfilePic1.png'

function SuggestionCard({ Background, Pic}) {
        return (
            <div className={styles.container}>
                <img src={Background} width="100%"/>
                <div className={styles.innerContainer}>
                    <img src={Pic} className={styles.pic}/>
                    <div className={styles.contentcontainer}>
                        Introduction to Neural Networks
                        <div className={styles.following}>
                            1,074,432 followings
                        </div>
                        <div className={styles.button}>
                            Know More
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default SuggestionCard;
