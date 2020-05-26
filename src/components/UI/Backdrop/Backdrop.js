import React from "react";
import classes from "./Backdrop.module.css";

/*
   THIS COMPONENT GOT USED IN Modal.js
   USED FOR THE ANIMATION OF ORDER SUMMARY AND
   CLICK TO GET RID OF ORDER SUMMARY PAGE
*/

const backdrop = (props) =>
  props.show ? (
    <div className={classes.Backdrop} onClick={props.clicked}></div>
  ) : null;

export default backdrop;
