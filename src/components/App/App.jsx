import React, { useState } from "react";

import './App.css'

import Dish from "../Dish/Dish";
import dishes from '../../data/dishes'


export default () => {

  const [detailsIsEnabled, setDetailsIsEnabled] = useState(false)
  const [selectedDish, setSelectedDish] = useState({})

  if(detailsIsEnabled){
    console.log(selectedDish)
  }

  return (
    <div className="div-app">
      <div className="app-main">
        <div className="app-left">
          <div className="app-header">
            <h1>Receitas</h1>
          </div>
          <div className="app-content-border-top"></div>
          <div className="app-content">
          {
            dishes.map((dish, i) => {
              return <Dish dish={dish} key={i} setProps={setDetailsIsEnabled} setDish={setSelectedDish}/>
            })
          }
          </div>
        </div>
        <div className="app-right">
          <div className="app-description">

          </div>
        </div>

      </div>
    </div>
  )
}