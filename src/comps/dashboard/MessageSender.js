import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import InputOptionFromSource from "./InputOptionFromSource";
import AddPhotoAlternateIcon from "./images/Chalkmate_Addphoto.svg";
// import LibraryAddIcon from "./images/Chalkmate_Addfromlibrary.svg";
import VisibilityIcon from './images/Chalkmate_Visibility.svg';
import VideoIcon from './images/Chalkmate_Video.svg';
import ArticleIcon from './images/Chalkmate_Article.svg';
import PostModal from "./postModal/PostModal";
// import Popup from "./Popup";

function MessageSender() {
  const [input, setInput] = useState("");
  const [showModal, toggleModal] = useState(false);

  // const handleSubmit = e => {
  //   e.preventDefault();

  //   setInput("");
  // };
  const OpenModal = () =>{
    // alert("works")
    // this.setState({showModal:true})
    toggleModal(true);
  }

  const closeModal = () =>{
    toggleModal(false);
  }
  return (
    <div className="MessageSender">
      <div className="messageSender-top">
        <div className="message-input">
          <PostModal showModal = {showModal} closeModal={closeModal}/>
          <img src = "./Image/profile1.png" style={{width:50,height:50}}/>
          <form onClick={OpenModal}>
            <input
              // value={input}
              // onChange={e => setInput(e.target.value)}
              // onClick={<Popup />}
              disabled
              className="input"
              placeholder="Share your thoughts..."
            />
            {/* <button
              onClick={handleSubmit}
              type="submit"
              style={{ color: "blue" }}
            >
              <b>SHARE</b>
            </button> */}
          </form>
        </div>
        <hr className="messageSenderDivider"/>
        <div className="messageSender-bottom">
          <div className="messageSender-leftDiv">
            <InputOptionFromSource Icon={VisibilityIcon} title="Anyone"/>
          </div>
          <div onClick ={OpenModal} className="messageSender-rightDiv">
              <InputOptionFromSource
                Icon={AddPhotoAlternateIcon}
                title="Photo"
              />
              <InputOptionFromSource
                Icon={VideoIcon}
                title="Video"
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
