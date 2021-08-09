import React, { Component } from 'react'
import SmallChatBox from './SmallChatBox'
import styles from './css/chat.module.css'
import BigBox from './BigBox'

export default class Chat extends Component {
    state = {
        openChats: []
    }
    chatOpener = (person) => {
        if(!this.state.openChats.includes(person)){
            // alert("Daaldo");
            this.setState({openChats: [...this.state.openChats, person]})
        }
        else{
            let array = [...this.state.openChats]
            var filtered = array.filter(function(value, index, arr){ 
                return value !== person;
            });
            this.setState({openChats:[...filtered, person]})
        }
    } 

    showChats = ()=>{
        return this.state.openChats.map((person)=>{
            return <BigBox closeChat = {this.closeChat} name={person}/>
        })
    }

    closeChat = (person)=>{
        let array = [...this.state.openChats]
        var filtered = array.filter(function(value, index, arr){ 
            return value !== person;
        });
        this.setState({openChats:filtered})
    }

    render() {
        return (
            <div className={styles.container}>
                {this.showChats()}
                <SmallChatBox chatOpener={this.chatOpener}/>
            </div>
        )
    }
}
