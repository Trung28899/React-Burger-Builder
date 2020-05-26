import React from "react";
import Aux from "../../../hoc/Auxi";
import Button from "../../UI/Button/Button";

/*
  DROP DOWN ORDER SUMMARY PAGE THAT WILL BE PULL DOWN AFTER
  HIT ORDER NOW BUTTON

  COMPONENT GO INCLUDED IN BurgerBuilder.js

  USE THE FOLLOWING COMPONENTS: 
  - Button
  - Aux
*/

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: {props.price}</strong>
      </p>
      <p>Continue to Checkout ?</p>
      <Button clicked={props.purchaseCancelled} btnType='Danger'>
        CANCEL
      </Button>
      <Button clicked={props.purchaseContinue} btnType='Success'>
        CONTINUE
      </Button>
    </Aux>
  );
};

export default orderSummary;
