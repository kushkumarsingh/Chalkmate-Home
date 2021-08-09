import React, { Component } from 'react'
import styles from './css/ChatList.module.css'
import ChatSmall from './ChatSmall'
import ProfilePicture from './images/humanplaceholder.jpeg'

export default class ChatList extends Component {
    render() {
        return (
            <div className={styles.container}>
                <ChatSmall openChat={this.props.openChat} profilePicture={ProfilePicture} last="kasubdvikausbkcjbaskjvcbaskjcbkasjbvckjasbvckjasvckjasvkcjsavkcjvsakjcvsakjcvkasjvckjsavckjsavckjsvckjsavckjavskcjvskjcvskjcvaskj" name="Anuj Talwar"/>
                <ChatSmall openChat={this.props.openChat} profilePicture={ProfilePicture} last="Hey Bro" name="Samaksh Kharbanda"/>
                <ChatSmall openChat={this.props.openChat} profilePicture={ProfilePicture} last="Hey Bro" name="Samaksh Kharbanda"/>
                <ChatSmall openChat={this.props.openChat} profilePicture={ProfilePicture} last="Hey Bro" name="Samaksh Kharbanda"/>
                <ChatSmall openChat={this.props.openChat} profilePicture={ProfilePicture} last="Hey Bro" name="Harsh Goyal"/>
                <ChatSmall openChat={this.props.openChat} profilePicture={ProfilePicture} last="Hey Bro" name="Harsh Goyal"/>
                <ChatSmall openChat={this.props.openChat} profilePicture={ProfilePicture} last="Hey Bro" name="Harsh Goyal"/>
                <ChatSmall openChat={this.props.openChat} profilePicture={ProfilePicture} last="Hey Bro" name="Aloo Peralta"/>
                <ChatSmall openChat={this.props.openChat} profilePicture={ProfilePicture} last="Hey Bro" name="Aloo Peralta"/>
                <ChatSmall openChat={this.props.openChat} profilePicture={ProfilePicture} last="Hey Bro" name="Aloo Peralta"/>
            </div>
        )
    }
}
