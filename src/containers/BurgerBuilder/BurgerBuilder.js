import React, { Component } from "react";
import Aux from "../../hoc/Auxi/Auxi";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from '../../axios-orders'; 
import Spinner from '../../components/UI/Spinner/Spinner'; 

/*
    THIS COMPONENT WILL CONTAINS EVERYTHING RELATED TO 
    BURGER DATA AND BURGER IMAGES. CONTAIN A STATE FOR 
    MANIPULATING DATA
*/

// Price for all ingredients
const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 1.3,
  bacon: 0.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false, 
  };

  updatePurchaseState(ingredients) {
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }

  // Update ingredients and price when new ingredient is added
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    // copy the whole state to updatedIngredients
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    // Update the count
    updatedIngredients[type] = updatedCount;

    // Updating price
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });

    // Update the state of ORDER NOW button
    this.updatePurchaseState(updatedIngredients);
  };

  // Same logic as add ingredient, just opposite way of doing it
  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount > 0) {
      const updatedCount = oldCount - 1;
      // copy the whole state to updatedIngredients
      const updatedIngredients = {
        ...this.state.ingredients,
      };
      // Update the count
      updatedIngredients[type] = updatedCount;

      // Updating price
      const priceDeduction = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDeduction;
      this.setState({ ingredients: updatedIngredients, totalPrice: newPrice });

      this.updatePurchaseState(updatedIngredients);
    }
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  purchaseCancelHandler = () => {
    this.setState({ purchasing: false });
  };

  purchaseContinueHandler = () => {
    // after click set loading to true 
    // > done process > set to false

    this.setState({loading: true}); 
    // alert("Continue, Bitch !");
    // Creating an order object to post to based URL firebase
    const order = {
      ingredient: this.state.ingredients, 
      price: this.state.totalPrice, 
      customer: {
        name: 'Trung Trinh', 
        address: {
          street: '20 Milady Road', 
          zipCode: 'M9L 2H8', 
          country: 'Canada',
        }, 
        email: 'trung28899@gmail.com', 
        deliveryMethod: 'fastest'
      }
    }
    // posting order to the baseURL/orders/
    // also with reponse and error handling
    axios.post('/orders.json', order)
    .then(response => {
      this.setState({loading: false, purchasing: false}); 
    })
    .catch(error => this.setState({loading: false, purchasing: false}) );
  };

  render() {
    const disableInfo = {
      ...this.state.ingredients,
    };
    for (let key in disableInfo) {
      disableInfo[key] = disableInfo[key] <= 0;
    }

    let orderSummary = <OrderSummary
    ingredients={this.state.ingredients}
    price={this.state.totalPrice.toFixed(2)}
    purchaseCancelled={this.purchaseCancelHandler}
    purchaseContinue={this.purchaseContinueHandler}
  />; 

    if(this.state.loading){
      orderSummary = <Spinner />
    }
    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancleHandler}
        >
          {orderSummary}
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemove={this.removeIngredientHandler}
          disabled={disableInfo}
          price={this.state.totalPrice}
          purchasable={this.state.purchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
