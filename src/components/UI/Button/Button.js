import React from "react";
import classes from "./Button.module.css";
/*
  THIS COMPONENT IS AN CUSTOMIZED UI COMPONENT AND USED IN
  OrderSummary.js 
*/

const button = (props) => (
  <button
    className={[classes.Button, classes[props.btnType]].join(" ")}
    onClick={props.clicked}
  >
    {props.children}
  </button>
);

export default button;
