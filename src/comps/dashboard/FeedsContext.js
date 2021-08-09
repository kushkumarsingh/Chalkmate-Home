import React , { createContext, Component } from 'react';
import PostSampleImg2 from './images/postSampleImg2.png';

export const FeedsContext = createContext();

class FeedsProviderComponent extends Component{
    state = {
        posts: [
        ],
    }

    addPost = (post) =>{
        let p = this.state.posts
        let newPost = {
            name:"Singapore Business Events",
            follower:"1,074,432",
            timestamp:"2 hr",
            message:'Chrome versions of famous logos by Martin Naumann. Go give Martin a follow on Instagram via username @mnaumanndesign \n #logos #lego #adidas #nike #nasa #apple #reebok',
            tag: "POPULAR EVENT",
            photoUrl: PostSampleImg2,
            video: false,
        }
        newPost.message = post.message
        newPost.photoUrl = post.photoUrl
        newPost.video = post.video
        let posts = [newPost, ...p] 
        // posts.push(newPost)
        this.setState({posts: posts})
    }
    
    render(){
        let contextData = {state: this.state, addPost: this.addPost}
        return (
            <FeedsContext.Provider value={contextData}>
                {this.props.children}
                {/* {console.log('Context render')} */}
            </FeedsContext.Provider>)
        }
}

export const FeedsProvider = FeedsProviderComponent;