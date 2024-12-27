"use client"

import Image from "next/image";
import React, { useState, useEffect } from "react";

import Recipes from "./pages/Recipes/page";
import Cooking from "./pages/Cooking/page";
import InitialLoading from "./components/Loadings/InitialLoading/InitialLoading";

export default function App() {
  
  const [actualScreen, setActualScreen] = useState("recipes")
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