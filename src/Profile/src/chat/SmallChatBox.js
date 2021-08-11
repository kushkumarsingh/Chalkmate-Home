import React, { Component } from 'react'
import styles from './css/SmallChatBox.module.css'
import ChatList from "./ChatList";
import ChatHeader from './ChatHeader'

export default class SmallChatBox extends Component {
    state={
        showChat:"None",
        person:'None'
    }
    openChat = (person="Anuj Talwar") =>{
        this.props.chatOpener(person)
    }
    openChatList = () =>{
        if(this.state.showChat === "ChatList") this.setState({showChat:'None', person:'None'});
        else    this.setState({showChat: 'ChatList', person:'None'});
    }
    render() {
        return (
            <div className={styles.outerContainer}>
                <ChatHeader arrowClick={this.openChatList} title={this.state.person!=="None"?this.state.person:"Message"} />
                {this.state.showChat==="ChatList" && <ChatList openChat={this.openChat}/>}
            </div>
        )
    }
}
