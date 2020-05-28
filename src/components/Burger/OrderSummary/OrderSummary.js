import React, { Component } from "react";
import Aux from "../../../hoc/Auxi/Auxi";
import Button from "../../UI/Button/Button";

/*
  DROP DOWN ORDER SUMMARY PAGE THAT WILL BE PULL DOWN AFTER
  HIT ORDER NOW BUTTON

  COMPONENT GO INCLUDED IN BurgerBuilder.js

  USE THE FOLLOWING COMPONENTS: 
  - Button
  - Aux
*/

class OrderSummary extends Component {
  // This could be a functional component
  componentWillUpdate() {
    console.log("[OrderSummary] WillUpdate");
  }

  render() {
    const ingredientSummary = Object.keys(this.props.ingredients).map(
      (igKey) => {
        return (
          <li key={igKey}>
            <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
            {this.props.ingredients[igKey]}
          </li>
        );
      }
    );
    return (
      <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients: </p>
        <ul>{ingredientSummary}</ul>
        <p>
          <strong>Total Price: {this.props.price}</strong>
        </p>
        <p>Continue to Checkout ?</p>
        <Button clicked={this.props.purchaseCancelled} btnType='Danger'>
          CANCEL
        </Button>
        <Button clicked={this.props.purchaseContinue} btnType='Success'>
          CONTINUE
        </Button>
      </Aux>
    );
  }
}

export default OrderSummary;
