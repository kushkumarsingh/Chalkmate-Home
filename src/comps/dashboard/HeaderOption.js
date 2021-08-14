import { Avatar } from "@material-ui/core";
import React from "react";
import styles from './HeaderOption.module.css';

function HeaderOption({ avatar, Icon, title }) {
  return (
    <div className={styles.headerOption}>
      {Icon && <Icon className={styles.headerOption_icon} />}
      {avatar && <Avatar classname={styles.headerOption_icon} src={avatar} />}
      <h3 className={styles.headerOption_title}>{title}</h3>
    </div>
  );
}

export default HeaderOption;
