import React from "react";

import Line from "../Line/Line";
import Ingredient from "../Ingredient/Ingredient";

import './DishDetails.css'

export default function DishDetails(props) {

  const selectedDish = props.selectedDish

  return (
    <div className="dish-details-div">
      <div className="dish-details-header">
        <div className="dish-image-div">
          <img alt={'Uma imagem de um delicioso prato de ' + selectedDish.name} src={selectedDish.src} />
        </div>
        <div className="dish-name-div">
          <h2>{selectedDish.name}</h2>
        </div>
      </div>
      <Line />
      <div className="dish-details-content">
        <div className="dish-description-div">
          <span>{selectedDish.description}</span>
        </div>
        <div className="dish-other-details-div">
          <span>
            Tamanho: <strong className="highlighted">{selectedDish.size.toUpperCase()}</strong>
          </span>
          <span>
            Tipo: <strong className="highlighted">{selectedDish.type.toUpperCase()}</strong>
          </span>
          <div className="ingredients-div">
            {
              selectedDish.ingredients.map((ingredient, i) => {
                return <Ingredient ingredient={ingredient} key={i} />
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}