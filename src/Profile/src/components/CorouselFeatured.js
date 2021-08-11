import React from 'react'

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
            <div className="slideshow" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', position: 'relative' }}>
                <div
                    className="slideshowSlider"
                    style={{ transform: `translate3d(${-this.state.index * 100}%, 0, 0)` }}
                >
                    {Array.from({ length: this.props.content.length / 3 }).map(index => (
                        
                        <div
                            className="slide"
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

                    <div className="slideshowDots">
                        {Array.from({ length: this.props.content.length / 3 }).map(idx => (
                            <div
                                key={idx}
                                className={`slideshowDot${this.state.index === idx ? " active" : ""}`}
                                onClick={() => { this.setIndex(idx) }} ></div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}
