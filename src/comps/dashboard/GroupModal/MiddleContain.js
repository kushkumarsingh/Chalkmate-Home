import React from "react";
import "./MiddleContain.css";

function MiddleContain() {

    return (
        <div className="classModal">
          <form>
            <h3 className="inputLabel" for="classname">
              Name your group
            </h3>
            <input type="text" className="inputField" placeholder="Ex: Physics lecture"/>
            <h3 for="description" className="inputLabel">
              Description
            </h3>
            <input type="text" className="inputField1" placeholder="Ex: Describe your class"/>
            <h3 for="grade" className="inputLabel">
              Select grade
            </h3>
            <input type="text" className="inputField" placeholder="Ex: A B C ect :"/>
            <h3 for="subject" className="inputLabel">
              Select subject
            </h3>
            <input type="text" className="inputField" placeholder="Ex: Physics"/>
            <button id="submitForm" className="saveDetailsButton">
              CREATE GROUP
            </button>
          </form>
        </div>
      );
    
}

export default MiddleContain;