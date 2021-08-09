import { React, Component } from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import PostSampleImg from './images/postSampleImg.png';
import PostSampleImg2 from './images/postSampleImg2.png';
import GetStarted from "./GetStarted";
import Suggestions from './Suggestions';
import {FeedsContext} from './FeedsContext';
import Image1 from './images/suggestions1.png';

export default class Feed extends Component {
  render() {
    return (

      <div className="feed">
        <MessageSender />

        {/* {posts.map(post => (
          <Post 
          key={post.id}
          name={post}/>
        ))} */}

        { this.context.state.posts.map(post => (
          <Post
            name={post.name}
            follower={post.follower}
            timestamp={post.timestamp}
            message={post.message}
            tag = {post.tag}
            photoUrl={post.photoUrl}
            video={post.video}
            shareModalOpener = {this.props.shareModalOpener}
          />
        )) }

        <GetStarted />

        <Post
          name="Singapore Business Events"
          follower="1,074,432"
          timestamp="2 hr"
          message={'Chrome versions of famous logos by Martin Naumann. Go give Martin a follow on Instagram via username @mnaumanndesign #logos #lego #adidas #nike #nasa #apple #reebok'}
          photoUrl={PostSampleImg2}
          tag = "POPULAR EVENT"
          shareModalOpener = {this.props.shareModalOpener}
        />

        <Suggestions image={Image1}/>

        <Post
          name="Singapore Business Events"
          follower="1,074,432"
          timestamp="2 hr"
          message={'Chrome versions of famous logos by Martin Naumann. Go give Martin a follow on Instagram via username @mnaumanndesign #logos #lego #adidas #nike #nasa #apple #reebok'}
          photoUrl={PostSampleImg}
          tag = "POPULAR EVENT"
          shareModalOpener = {this.props.shareModalOpener}
          />

      </div>
    )
  }
}

Feed.contextType = FeedsContext;

