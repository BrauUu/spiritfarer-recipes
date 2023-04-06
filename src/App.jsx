import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"

import Dish from "./components/Dish/Dish";
import DishDetails from "./components/DishDetails/DishDetails";
import Line from "./components/Line/Line";
import Loading from "./components/Loading/Loading";

import api from './services/api';

import './App.css'

export default () => {

  const [selectedDish, setSelectedDish] = useState(false)
  const [dishesList, setDishesList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/")
      setDishesList(response.data)
      setTimeout(() => {
        setIsLoading(false)
      }, 3000)
    }
    fetchData()
  }, [])

  return (
    <>
      {isLoading ?
        <Loading></Loading>
        :
        <motion.div
          className="app-main"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
      }
    </>
  )
}