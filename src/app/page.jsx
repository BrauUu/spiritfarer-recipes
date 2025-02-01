"use client"

import React, { useState } from "react";

import { Provider } from './Context'

import Recipes from "./pages/Recipes";
import Cooking from "./pages/Cooking";

export default function App() {

  const [actualScreen, setActualScreen] = useState("recipes")

  function changeActualScreen() {
    if (actualScreen === 'recipes')
      setActualScreen('cooking')
    else if (actualScreen === 'cooking')
      setActualScreen('recipes')
  }

  return (
    <div
      className="h-screen flex justify-center items-center"
    >
      <Provider>
        {
          actualScreen === "recipes" ?
            <Recipes changeActualScreen={changeActualScreen} />
            :
            <Cooking changeActualScreen={changeActualScreen} />
        }
      </Provider>
    </div>
  )
}