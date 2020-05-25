import React, { Component } from "react";
import Aux from "../../hoc/Auxi";
import Burger from "../../components/Burger/Burger";

/*
    THIS COMPONENT WILL CONTAINS EVERYTHING RELATED TO 
    BURGER DATA AND BURGER IMAGES. CONTAIN A STATE FOR 
    MANIPULATING DATA
*/

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
  };

  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>BuildControl</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
