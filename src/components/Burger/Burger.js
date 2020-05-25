import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

/*
    THIS COMPONENT WILL TAKE THE INGREDIENTS ELEMENTS IN 
    BURGERINGREDIENT.JS TO CONSTRUCT THE WHOLE BURGER IMAGE

    THIS COMPONENT WILL USE INPUT DATA PASSED FROM THE 
    BURGERBUILDER.JS BY PROPS
*/

const burger = (props) => {
  // Object.keys return a string array of keys
  // map takes each key as igKey

  /* Array() function form an array of anything that is passed in
    for example: Array(5) will return an array of 5 empty spaces. 

    Notice that the props.ingredients[igKey] will return a number
    of the targeted ingredient.
  */

  /* The Speard Operator acts like a loop to add move BurgerIngredient
  of the same ingredient to the burger */

  /* The reduce() function */
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
      // having the array of 2 elements: key string and its value
    })
    .reduce((arr, el) => {
      // reduce function to create empty array if everything is 0 or null
      // console.log(el);
      // console.log(arr);
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p> Please start adding ingredients ! </p>;
  }

  // console.log(transformedIngredients);
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default burger;
