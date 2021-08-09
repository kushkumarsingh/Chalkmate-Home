import React from "react";
import "./Popup.css";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

function Popup() {
  return (
    <div className="popup">
      <div className="popup-header">
        <AddIcon />
        <h3>Create a post</h3>
        <CloseIcon />
      </div>
      <div className="popup-profile"></div>
      <div className="popup-input"></div>
      <div className="popup-option"></div>
    </div>
  );
}

export default Popup;
