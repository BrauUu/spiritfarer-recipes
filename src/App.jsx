import React, { useState, useEffect } from "react";

import Recipes from "./screens/Recipes/Recipes";
import InitialLoading from "./components/Loadings/InitialLoading/InitialLoading";

import './App.css'
import Cooking from "./screens/Cooking/Cooking";


export default function App() {
  
  const [actualScreen, setActualScreen] = useState("cooking")
  const [isLoading, setIsLoading] = useState(true)
  
  function changeActualScreen() {
    if(actualScreen === 'recipes')
      setActualScreen('cooking')
    else if(actualScreen === 'cooking')
      setActualScreen('recipes')
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2500)
  }, [])

  return (
    <>
      {isLoading ?
        <InitialLoading/>
        :
        actualScreen === 'recipes' ?
          <Recipes changeActualScreen={changeActualScreen}/> 
          :
          <Cooking changeActualScreen={changeActualScreen}/>
      }
    </>
  )
}