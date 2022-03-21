import React, { useState, useEffect } from "react";

import './App.css'

import Dish from "../Dish/Dish";
import DishDetails from "../DishDetails/DishDetails";
import Line from "../Line/Line";

import api from '../../services/api';

export default () => {

  const [detailsIsEnabled, setDetailsIsEnabled] = useState(false)
  const [selectedDish, setSelectedDish] = useState({})
  const [dishesList, setDishesList] = useState([])

  useEffect(() => {
    setTimeout( async () => {
      const response = await api.get("/")
      setDishesList(response.data)
    }, 500)
  }, [])

  return (
    <div className="div-app">
      <div className="app-main">
        <div className="app-left">
          <div className="app-header">
            <h1>Receitas</h1>
            <Line backgroundColor="#093948" highlightedColor="#FAF86C"/>
          </div>
          <div className="app-content">
            {
              dishesList.map((dish, i) => {
                return <Dish dish={dish} key={i} setProps={setDetailsIsEnabled} setDish={setSelectedDish} />
              })
            }
          </div>
        </div>
        <div className="app-right">
            {
              detailsIsEnabled && selectedDish ?
                <DishDetails selectedDish={selectedDish}/>
                :
                <></>
            }
        </div>

      </div>
    </div>
  )
}