"use client"

import React, { useState } from "react";

import { Provider } from './Context'

import backgroundDay from '../../public/images/background-day.png'
import backgroundNight from '../../public/images/background-night.png'
import backgroundDawn from '../../public/images/background-dawn.png'
import backgroundDusk from '../../public/images/background-dusk.png'

import Recipes from "./pages/Recipes";
import Cooking from "./pages/Cooking";

export default function App() {

  const [actualScreen, setActualScreen] = useState("recipes")

  function getBackgroundByTime() {
    const date = new Date()
    const hour = date.getHours()
    if (hour >= 5 && hour <= 7) {
      return backgroundDawn.src
    }
    if (hour > 7 && hour <= 17) {

      return backgroundDay.src
    }
    if (hour > 17 && hour <= 19) {
      return backgroundDusk.src
    }
    return backgroundNight.src
  }

  function changeActualScreen() {
    if (actualScreen === 'recipes')
      setActualScreen('cooking')
    else if (actualScreen === 'cooking')
      setActualScreen('recipes')
  }

  return (
    <div
      className="bg-no-repeat bg-center bg-cover h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${getBackgroundByTime()})` }}
    >
      <Provider>
        {
          actualScreen === 'recipes' ?
            <Recipes changeActualScreen={changeActualScreen} />
            :
            <Cooking changeActualScreen={changeActualScreen} />
        }
      </Provider>
    </div>
  )
}