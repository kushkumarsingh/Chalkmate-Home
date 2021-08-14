import FavoriteIcon from "@material-ui/icons/Favorite";
// import TextsmsIcon from "@material-ui/icons/Textsms";
import NearMeIcon from "./images/Chalkmate_Share.svg";
import { React, useState, Component } from "react";
import InputOption from "./InputOption";
import styles from "./Post.module.css";
import SampleProfileImg from './images/profilePicSample.png';
import BlueComment from './images/Chalkmate_Blu_Comment.svg';
import RedLike from './images/Chalkmate_red_like.svg';
import CommentIcon from './images/Chalkmate_Comment.svg';
import InputOptionFromSource from './InputOptionFromSource';
import Comment from "./Comment";
import Video from './Video';
import Picker from 'emoji-picker-react';
import './picker.css';


function Post({ name, follower, timestamp, message, photoUrl, tag, video, shareModalOpener }) {
  const [likes, setlikes] = useState(283)
  const like = () =>{
    // setlikes(284)
    if(likes == 283){
      setlikes(284);
    }
    else{
      setlikes(283);
    }
  }

  const openComments = () =>{
    let dummyComment = {name : "John Deep", commentdata : "Lorem ipsum dolor sit amet, consetetur adipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna", timestamp : "1d", like : 0}
    setComment([dummyComment, dummyComment])
  }

  const [Input, setInput] = useState("")
  
  const [comment,setComment] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    const commentobj = {
      name : "John Deep",
      commentdata : Input,
      timestamp : "1d",
      like : 0
    }
    setComment([...comment,commentobj])
    setInput("");
  }

  // <Comment
	// 			img = c.img,
	// 			name = c.name,
	// 			comData = c.comData,
	// 			likes = c.likes,
	// 			time = c.time
	// 		/>


  const commentSection = () => (
    comment.map((c,i) => (
      
        <Comment key={i}
          photo = {SampleProfileImg}
	  			name = {c.name}
	  			commentdata = {c.commentdata}
	   			timestamp = {c.timestamp}
        />
      
    ))
  )

  const [chosenEmoji, setChosenEmoji] = useState(null);

  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    setInput(Input +emojiObject.emoji);
  };
  
  const [emoji,setEmoji] = useState(false);

  const toggleEmojiPicker = () => {
    setEmoji(!emoji)
  }

  const thumbsUp = () => {
    setInput(Input + "👍");
  }

  return (
    <div className={styles.Post}>
      {/* <div className="post-header">
        <Avatar className="avatar-icon" />
        <div className="post-Info">
          <h2>{name}</h2>
          <p>{follower}</p>
          <p>{timestamp}</p>
        </div>
      </div> */}
      {tag && (<div className={styles.post_tag}>{tag}</div>)}
      <div className={styles.post_header}>
        {/* <Avatar className="post-profile-pic" /> */}
        <img src={SampleProfileImg} className={styles.post_profile_pic} />
        <div className={styles.post_Info}>
          <h2 className={styles.post_info_userName}>{name}</h2>
          <p className={styles.post_info_follower}>{follower} following</p>
          <p className={styles.post_info_timestamp}>{timestamp}</p>
        </div>
        {/* <div className="post-header-options">
          <img src={Settings} alt = "Settings" />
        </div> */}
      </div>

      <div className={styles.post_body}>
        <p className={styles.postMessage}>{message.slice(0,100)} <span className={styles.post_body_readMore}>{message.length>70?"...read more":null}</span></p>
        {video? 
        <Video src = {photoUrl} />
        :
        <img src={photoUrl} alt="" />}
      </div>

      <div className={styles.post_likeCommentBox}>
        <div onClick={like} className={styles.post_like}>
          <img src={RedLike} height='13px'/> {likes}
        </div>
        <div onClick={openComments} className={styles.post_comment} style={{cursor:"pointer"}}>
          <img src={BlueComment} height='13px'/> 43 Comments          
        </div>
      </div>

      <div className={styles.post_option}>
        {/* <InputOption Icon={FavoriteIcon} title="Likes" color="#B4B4B4" /> */}
        <span onClick={()=>like()}>
          {likes == 283 ? 
          <InputOption Icon={FavoriteIcon} title="Likes" color="#858585" />
            :
          <InputOptionFromSource Icon={RedLike} title="Likes"/>
          }
        </span>
        <span onClick={openComments}>
          <InputOptionFromSource Icon={CommentIcon} title="Comment"/>
        </span>
        <span onClick={shareModalOpener}>
          <InputOptionFromSource Icon={NearMeIcon} title="Share" />
        </span>
        {/* <InputOption Icon={Bookmark} title="Bookmark" color="#B4B4B4" /> */}
      </div>

      {/* <div className="Comment">
        <Avatar />
        <form>
          <input className="input" placeholder="Write your Comment here..." />
          <button type="submit" style={{ color: "#236ae8" }}>
            <b>POST</b>
          </button>
        </form>
      </div> */}
      <div className={styles.comment_input}>
        <div>
          < img src="./Image/profile.png" className={styles.comment_avatar}/>
        </div>
        <div className={styles.comment_input_div}>
          <form onSubmit={handleSubmit} >
            <input
              value={Input}
              onChange={(e) => setInput(e.target.value)}
              // onClick={<Popup />}
              className={styles.input}
              placeholder="Write your comment here..."
            />
            {/* <button
              onClick={handleSubmit}
              type="submit"
              style={{ color: "blue" }}
            >
              <b>SHARE</b>
            </button> */}
             {emoji?<Picker className={styles.picker} onEmojiClick={onEmojiClick} />:""}
          </form>
          
          
          <div className={styles.comments_icons_div}>
            <img onClick={toggleEmojiPicker} style={{height:20,width:20}} src="./Image/Chalkmate_Smiley.svg"/>
            <img onClick={thumbsUp} style={{height:20,width:20}} src="./Image/Chalkmate_Thumbsup.svg"/>
            <img style={{height:20,width:20}} src="./Image/Chalkmate_GIF.svg"/>
          </div>
        </div>
      </div>

      {comment[0]?<div className={styles.comments_div}>
        Most Relevant
        {commentSection()}
      </div>:null}
    </div>
  );
}

export default Post;