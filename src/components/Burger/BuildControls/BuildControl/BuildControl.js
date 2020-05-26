import React from "react";
import buildControls from "../BuildControls";
import classes from "./BuildControl.module.css";

/*
   THIS COMPONENT IS USED TO CREATE SINGULAR LINE OF 
   INGREDIENT WITH MORE&LESS BUTTON

   THIS COMPONENT GOT USED IN BuildControls.js

   USING NONE OTHER COMPONENT
*/

// Understand that disabled property in Less button is a
// html property
const buildControl = (props) => (
  <div className={classes.BuildControl}>
    <div className={classes.Label}>{props.label}</div>
    <button
      className={classes.Less}
      onClick={props.removed}
      disabled={props.disabled}
    >
      Less
    </button>
    <button className={classes.More} onClick={props.added}>
      More
    </button>
  </div>
);

export default buildControl;
