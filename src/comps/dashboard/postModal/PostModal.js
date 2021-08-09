import React, { Component } from 'react'
import { ModalWithHeader } from '../shared/ui/Modal/Modal'
import MiddleContainer from './MiddleContainer'
import styles from './css/modal.module.css'
import BottomContainer from './BottomContainer'
import {FeedsContext} from '../FeedsContext';
import PostSampleImg2 from '../images/postSampleImg2.png';

export default class PostModal extends Component {

    state = {
        message: '',
        photoUrl: null,
        video: false,
    }

    onPost = () =>{
        let post = {}
        post.message = this.state.message
        post.photoUrl = this.state.photoUrl
        post.video = this.state.video
        this.context.addPost(post)
        this.setState({message:'', photoUrl:null})
        this.props.closeModal()
    }

    onChange = (e) =>{
        this.setState({message: e.target.value})
    }

    onPicInput = (e) =>{
        this.setState({photoUrl: URL.createObjectURL(e.target.files[0])})
    }

    videoInput = (e) =>{
        this.setState({video:true, photoUrl: URL.createObjectURL(e.target.files[0])})
    }

    render() {
        return (
            <div>
                <ModalWithHeader title="Create a Post" show={this.props.showModal} closeHandler={this.props.closeModal}>
                    <div className={styles.modalBody}>
                        <MiddleContainer pic = {this.state.photoUrl} video = {this.state.video} onChange = {this.onChange} />
                        <BottomContainer videoInput = {this.videoInput} fileInput = {this.onPicInput} onPost = {this.onPost} />
                    </div>
                    <img height="100px" src={this.state.image}/>
                </ModalWithHeader>
            </div>
        )
    }
}

PostModal.contextType = FeedsContext;