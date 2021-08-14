import React from "react";
import styles from "./Popup.module.css";
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from "@material-ui/icons/Close";

function Popup() {
  return (
    <div className={styles.popup}>
      <div className={styles.popup_header}>
        <AddIcon />
        <h3>Create a post</h3>
        <CloseIcon />
      </div>
      <div className={styles.popup_profile}></div>
      <div className={styles.popup_input}></div>
      <div className={styles.popup_option}></div>
    </div>
  );
}

export default Popup;
