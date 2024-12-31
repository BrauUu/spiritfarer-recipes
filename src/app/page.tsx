"use client"

import React, { useState} from "react";

import Recipes from "./pages/Recipes/page";
import Cooking from "./pages/Cooking/page";

export default function App() {
  
  const [actualScreen, setActualScreen] = useState("recipes")
  
  function changeActualScreen() {
    if(actualScreen === 'recipes')
      setActualScreen('cooking')
    else if(actualScreen === 'cooking')
      setActualScreen('recipes')
  }

  return (
    <>
      {
        actualScreen === 'recipes' ?
          <Recipes changeActualScreen={changeActualScreen}/> 
          :
          <Cooking changeActualScreen={changeActualScreen}/>
      }
    </>
  )
}