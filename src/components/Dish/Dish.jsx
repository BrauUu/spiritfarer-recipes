import React from "react";

import './Dish.css'

export default props => {

  const dish = props.dish
  const setProps = props.setProps
  const setDish = props.setDish

  function setSelectedDish() {
    setProps(true)
    setDish(dish)
  }

  return (
    <div className="dish" onClick={setSelectedDish}>
      <img src={dish.src}></img>
    </div>
  )
}