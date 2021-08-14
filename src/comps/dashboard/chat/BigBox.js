import React, { Component } from 'react'
import styles from './css/bigBox.module.css'
// import Send from './images/send.svg'
import MyMessage from './MyMessage'
import YourMessage from './YourMessage'
import ChatHeader from './ChatHeader'
import Add from './images/whiteAdd.svg'
import Emoji from './images/Emoji.png'
import GIF from './images/GIF.png'
import Thumbup from './images/Thumbup.png'

// import Message from './Message'
// import ProfilePicture from './images/humanplaceholder.jpeg'

export default class BigBox extends Component {
    state={
        showChat: true
    }

    scrollToBottom = () => {
        if(this.state.showChat)    this.messagesEnd.scrollIntoView();
      }
      
    componentDidMount() {
        this.scrollToBottom();
    }
      
    componentDidUpdate() {
        this.scrollToBottom();
    }

    hideChat = () =>{
        // this.setState({
        //     showChat: !this.state.showChat
        // })
        this.props.closeChat(this.props.name)
    }
    minimizeChat = () =>{
        this.setState({
            showChat: !this.state.showChat
        })
    }
    render() {
        return (
            <div style={{marginTop:'auto'}}>
                <ChatHeader click={this.minimizeChat} title={this.props.name} cross arrowClick={this.hideChat}/>
                {this.state.showChat &&
                <div className={styles.container}>
                    <div className={styles.middleContainer}>
                        <MyMessage message="Hello"/>
                        <YourMessage message="Heyy"/>
                        <MyMessage message="How You Doin'?"/>
                        <YourMessage message="Nothing much, just woke up, gonna have breakfast now"/>
                        <YourMessage message="How about you?"/>
                        <MyMessage message="You just woke up?! Its like 3pm bruhhhhh 😂"/>
                        <YourMessage message="Yeah what to do"/>
                        <YourMessage message="ljasbckjb"/>
                        <MyMessage message="khbkb"/>
                        <MyMessage message="lojabsklcjbaksljcbklajsbc"/>
                        <MyMessage message="kajsbckjasbckjbaskjcbas"/>
                        <MyMessage message="kajsbckjasbckjabskcjbaskcjbaskjcbaskjb"/>
                        <YourMessage message="ojb"/>
                        <p className={styles.unreadText}><span className={styles.unreadSpan}>2 unread messages</span></p>
                        <YourMessage message="kahsvbckjasbckjbas"/>
                        <YourMessage message="jasbvckjasbvckjavbskcjvaskjchvaskhcvaskjhcvjasvhcjavshc"/>
                        <div style={{ height:"4px", float:"left", clear: "both" }}
                            ref={(el) => { this.messagesEnd = el; }}>
                        </div>

                    </div>
                    <div className={styles.inputContainer}>
                        <div className={styles.innerInputContainer}>
                            <div className={styles.addContainer}>
                                <img height="30px" src={Add} alt="Add" />
                            </div>
                            <input className={styles.inputBox} type="text" placeholder='Aa'></input>
                            <div className={styles.imagesContainer}>
                                <img className={styles.greyImage} height="25px" src={Emoji} alt="Emoji" />
                                <img height="25px" src={GIF} alt="GIF" />
                                <img className={styles.greyImage} height="23px" src={Thumbup} alt="Thumbup" />
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        )
    }
}
