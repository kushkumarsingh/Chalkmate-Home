import React from 'react'
import styles from '../Profile.module.css'

const CorouselImages = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 2500;


export default class CorouselFeed extends React.Component {

    state = {
        index: 0
    }

    setIndex(index) {
        this.setState({ index: index })
    }

    render() {


        return (
            <div className={styles.slideshow} style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', position: 'relative' }}>
                <div
                    className={styles.slideshowSlider}
                    style={{ transform: `translate3d(${-this.state.index * 100}%, 0, 0)` }}
                >
                    {Array.from({ length: this.props.content.length / 3 }).map(index => (
                        
                        <div
                            className={styles.slide}
                            key={index}
                            style={{ backgroundColor: 'red' }}
                        >
                            {
                                this.props.content.slice(index, index * 3).map((img, _) => {
                                    console.log(img)
                                    return (
                                        <div
                                            style={{ width: '30%' }}
                                        >
                                            ve
                                            <img src={img} />
                                        </div>
                                    )
                                })
                            }

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
                        {Array.from({ length: this.props.content.length / 3 }).map(idx => (
                            <div
                                key={idx}
                                className={`${styles.slideshowDot}${this.state.index === idx ? styles.active : ""}`}
                                onClick={() => { this.setIndex(idx) }} ></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
