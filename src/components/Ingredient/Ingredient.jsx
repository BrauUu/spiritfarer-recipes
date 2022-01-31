import React from "react";

import ingredients from "../../data/ingredients";

import './Ingredient.css'

export default props => {
  const ingredient = props.ingredient
  const search = ingredient
  let ingredientSrc;

  try{
    const selectedIngredient = ingredients.find(ingredient => ingredient.name === search)

    ingredientSrc = selectedIngredient.src
  } catch (e) {
    console.error(e)
  }

  return(
    <div className="ingredient-div">
      <div className="ingredient-card">
        <div className="ingredient-card-background">
          <img src={ingredientSrc}></img>
        </div>
      </div>
      <span>{ingredient}</span>
    </div>
  )
}