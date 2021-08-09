import React, { Component } from 'react'
import styles from './css/BottomContainer.module.css'
import Photos from './images/photos.svg'
import Briefcase from './images/briefcase.svg'
import Video from './images/video.svg'
import Doc from './images/document.svg'
import DropBox from './DropBox'

export default class BottomContainer extends Component {
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.innerBox}>
                    <div style={{position:'relative'}}>
                        <input onChange = {this.props.fileInput} type="file" accept="image/*" className={styles.fileUpload} />
                        <img src={Photos} alt="Photos" className={styles.photo}/>
                    </div>
                    <div style={{position:'relative'}}>
                        <input onChange = {this.props.videoInput} type="file" accept="video/mp4,video/x-m4v,video/*" className={styles.fileUpload} />
                        <img src={Video} alt="Video" className={styles.photo}/>
                    </div>
                    {/* <img src={Briefcase} alt="Briefcase" className={styles.photo}/> */}
                    {/* <img src={Doc} alt="Document" className={styles.photo}/> */}
                </div>

                <div className={styles.rightInner}>
                    <DropBox message drop title="Message" />
                    {/* <DropBox title="POST"/> */}
                    <div onClick = {this.props.onPost} className={styles.post}>
                        POST
                    </div>
                </div>
            </div>
        )
    }
}

//filter: invert(53%) sepia(66%) saturate(962%) hue-rotate(195deg) brightness(99%) contrast(87%)