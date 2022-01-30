import React, { useState } from "react";

import './App.css'

import Dish from "../Dish/Dish";
import DishDetails from "../DishDetails/DishDetails";
import Line from "../Line/Line";

import dishes from '../../data/dishes'

export default () => {

  const [detailsIsEnabled, setDetailsIsEnabled] = useState(false)
  const [selectedDish, setSelectedDish] = useState({})

  return (
    <div className="div-app">
      <div className="app-main">
        <div className="app-left">
          <div className="app-header">
            <h1>Receitas</h1>
          </div>
          <Line backgroundColor="#093948" highlightedColor="#FAF86C"/>
          <div className="app-content">
            {
              dishes.map((dish, i) => {
                return <Dish dish={dish} key={i} setProps={setDetailsIsEnabled} setDish={setSelectedDish} />
              })
            }
          </div>
        </div>
        <div className="app-right">
          <div className="app-description">
            {
              detailsIsEnabled && selectedDish ?
                <DishDetails selectedDish={selectedDish}/>
                :
                <></>
            }

          </div>
        </div>

      </div>
    </div>
  )
}