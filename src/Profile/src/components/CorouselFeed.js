import React from 'react'

import styles from '../Profile.module.css'

const CorouselImages = ["Image/add.png", "Image/add.png", "Image/add.png"]


export default function CorouselFeed() {
    const [index, setIndex] = React.useState(0);


    return (
        <div className={styles.slideshow} style={{ position: 'relative', borderRadius: 10, boxShadow: '0px 8px 16px 0px rgba(0,0,0,0.2)'}}>
            <div
                className={styles.slideshowSlider}
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {
                CorouselImages.map((img, index) => (
                    <div
                        className={styles.slide}
                        key={index}
                        // style={{borderRadius: 10}}
                    >
                            <img src={img} style={{width: '100%', height: "100%", borderRadius: 10 }} />
                    </div>
                ))}
            </div>

            <div
                style={{
                    position: 'absolute',
                    bottom: 5,
                    left: 0,
                    right: 0
                }}
            >

                <div className={styles.slideshowDots}>
                    {CorouselImages.map((_, idx) => (
                        <div
                            key={idx}
                            className={`${styles.slideshowDot} ${index === idx ? styles.slideshowDot_active : " "}`}
                            onClick={() => { setIndex(idx) }} ></div>
                    ))}
                </div>
            </div>
        </div>
    );
}
