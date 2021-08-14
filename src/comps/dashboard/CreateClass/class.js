import { React, Component } from "react";
import styles from "./class.module.css";

class Class extends Component {
  
  render() { 
  return (
    <div className={styles.app}>
       <div className={styles.app_body}>
         <h1>hii</h1>
       </div>
    </div>

  );
}
}

export default Class;