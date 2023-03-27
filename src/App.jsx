import React, { useState, useEffect } from "react";

import Dish from "./components/Dish/Dish";
import DishDetails from "./components/DishDetails/DishDetails";
import Line from "./components/Line/Line";

import api from './services/api';

import './App.css'

export default () => {

  const [selectedDish, setSelectedDish] = useState(false)
  const [dishesList, setDishesList] = useState([])

  useEffect(async () => {
    const response = await api.get("/")
    setDishesList(response.data)
  }, [])

  return (
    <div className="app-main">
      <div className="app-left">
        <div className="app-header">
          <h1>Receitas</h1>
        </div>
        <Line />
        <div className="app-content">
          {
            dishesList.map((dish, i) => {
              return <Dish dish={dish} key={i} setDish={setSelectedDish} />
            })
          }
        </div>
      </div>
      <div className="app-right">
        {
          selectedDish ?
            <DishDetails selectedDish={selectedDish} />
            :
            <></>
        }
      </div>
    </div>
  )
}