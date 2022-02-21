import React from "react";

import './Ingredient.css'

export default props => {
  const ingredient = props.ingredient

  return(
    <div className="ingredient-div">
      <div className="ingredient-card">
        <div className="ingredient-card-background">
          <img src={ingredient.src}></img>
        </div>
      </div>
      <span>{ingredient.name}</span>
    </div>
  )
}