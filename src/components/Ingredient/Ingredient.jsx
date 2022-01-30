import React from "react";

import ingredients from "../../data/ingredients";



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
        <img src={ingredientSrc}></img>
      </div>
      <span>{ingredient}</span>
    </div>
  )
}