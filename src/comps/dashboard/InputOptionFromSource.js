import React from "react";
import styles from './InputOption.module.css';

function InputOptionFromSource({ Icon, title, color, fontcolor }) {
  return (
    <div className={styles.inputOption}>
      {/* <Icon style={{ color: color }} /> */}
      <img src={Icon} alt={Icon} className={styles.InputOptionsIconImage}/>
      <h4 style={{color:fontcolor}}>{title}</h4>
    </div>
  );
}

export default InputOptionFromSource;
