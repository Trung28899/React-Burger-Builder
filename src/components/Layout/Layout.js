import React from "react";
import Aux from "../../hoc/Auxi";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

/*
  LAYOUT COMPONENT THAT COVERS 2 PARTS: 
  - ToolBar, SideDrawer and BackDrop
  - BurgerBuilder
  See Component Tree for further understanding
*/

const layout = (props) => (
  <Aux>
    <Toolbar />
    <SideDrawer />
    <main className={classes.Content}>{props.children}</main>
  </Aux>
);

export default layout;
