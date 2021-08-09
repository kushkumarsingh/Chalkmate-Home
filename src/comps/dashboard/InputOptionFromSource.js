import React from "react";
import "./InputOption.css";

function InputOptionFromSource({ Icon, title, color, fontcolor }) {
  return (
    <div className="inputOption">
      {/* <Icon style={{ color: color }} /> */}
      <img src={Icon} alt={Icon} className="InputOptionsIconImage"/>
      <h4 style={{color:fontcolor}}>{title}</h4>
    </div>
  );
}

export default InputOptionFromSource;
