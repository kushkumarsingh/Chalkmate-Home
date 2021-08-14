import React, { Component } from 'react'
import styles from './css/SmallChatBox.module.css'
import ArrowUp from './images/ArrowUp.svg'
import placeholder from './images/humanplaceholder.jpeg'
import Add from './images/add.svg'
import More from './images/more.svg'
import Cross from './images/cross.svg'
import Video from './images/Video.svg'
import Phone from './images/Phone.svg'

export default class ChatHeader extends Component {
    state={
        arrowDown: false,
    }
    arrowClick = () =>{
        this.setState({arrowDown:!this.state.arrowDown});
        this.props.arrowClick()
    }

    click = ()=>{
        if(this.props.click) this.props.click()
        else this.arrowClick()
    }
    
    render() {
        return (
                <div onClick={()=>{this.click()}} className={styles.innerContainer}>
                    <div className={styles.profilePicContainer}>
                        <img className={styles.profilePic} src={placeholder} alt="profile"/>
                        <div className={styles.status}>

                        </div>
                    </div>
                    {this.props.title}
                    <div className={styles.rightContainer}>
                        {this.props.cross?
                            <img className={styles.phone} src={Phone} alt="Call" />
                        :
                            null
                        }
                        {this.props.cross?
                            <img className={styles.video} src={Video} alt="Video Call" />
                        :
                            <img src={Add} alt="Add" />
                        }
                        <img className={styles.arrowUp} src={More} alt="More" />
                        {this.props.cross?<img src={Cross} alt="Close" onClick={()=>{this.arrowClick()}} className={this.state.arrowDown?styles.arrowDown:styles.arrowUp}/>:
                            <img onClick={()=>{this.arrowClick()}} className={this.state.arrowDown?styles.arrowDown:styles.arrowUp} src={ArrowUp} alt="Arrow Up"/>
                        }
                    </div>
                </div>
        )
    }
}
