import React from "react";
import { Link } from "react-router-dom";
import styles from "./MiddleContain.module.css";

function MiddleContain() {

    return (
        <div className={styles.classModal}>
          <form>
            <h3 className={styles.inputLabel} for="classname">
              Name your group
            </h3>
            <input type="text" className={styles.inputField} placeholder="Ex: Physics lecture"/>
            <h3 for="description" className={styles.inputLabel}>
              Description
            </h3>
            <input type="text" className={styles.inputField1} placeholder="Ex: Describe your class"/>
            <h3 for="grade" className={styles.inputLabel}>
              Select grade
            </h3>
            <div className={styles.drop}>
            {/* <img src = "./Image/dropArrow.svg"></img> */}
            <input type="text" className={styles.inputField} placeholder="Ex: A B C ect :"/>
            </div>
            <h3 for="subject" className={styles.inputLabel}>
              Select subject
            </h3>
            <div className={styles.drop}>
            {/* <img src = "./Image/dropArrow.svg"></img> */}
            <input type="text" className={styles.inputField} placeholder="Ex: Physics"/>
            </div>
            <button id="submitForm" className={styles.saveDetailsButton}>
              <Link to="/group">
              Save
              </Link>
            </button>
          </form>
        </div>
      );
    
}

export default MiddleContain;