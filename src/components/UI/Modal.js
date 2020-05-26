import React from "react";
import classes from "./Modal.module.css";
import Aux from "../../hoc/Auxi";
import Backdrop from "./Backdrop/Backdrop";

/*
  THIS COMPONENT IS USED IN BurgerBuilder.js
  FOR THE BACKGROUND OF ORDER SUMMARY TO ENABLE
  THE BACKDROP ANINMATION ORDER SUMMARY
*/

const modal = (props) => (
  <Aux>
    <Backdrop show={props.show} clicked={props.modalClosed} />
    <div
      className={classes.Modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </Aux>
);

export default modal;
