"use client";

import React, { useState, useEffect } from "react";

import { Provider } from "./Context";
import Recipes from "./pages/Recipes";
import Cooking from "./pages/Cooking";

import MusicController from "./components/MusicController";

import atSeaBgMusic from '../../public/songs/atSea.mp3'

const backgroundMusic = new Audio(atSeaBgMusic);
backgroundMusic.volume = 0.3;
backgroundMusic.loop = true
document.body.appendChild(backgroundMusic)

export default function App() {

  const [actualScreen, setActualScreen] = useState(null);
  const [isMusicActive, setIsMusicActive] = useState(false);

  useEffect(() => {
    setActualScreen("recipes");
  }, []);

  useEffect(() => {
    const playMusic = async () => {
      try {
        await backgroundMusic.play();
        setIsMusicActive(true)
      } catch (err) {
        setIsMusicActive(false)
      }
    };
    backgroundMusic.addEventListener("canplaythrough", playMusic)
  }, [])

  function changeActualScreen() {
    setActualScreen((prev) => (prev === "recipes" ? "cooking" : "recipes"));
  }

  function changeMusicState(){ 
    if (isMusicActive) {
      backgroundMusic.muted = true;
    } else {
      backgroundMusic.play();
      backgroundMusic.muted = false;
    }
    setIsMusicActive(!isMusicActive);
  }

  if (!actualScreen) return null

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Provider>
        {actualScreen === "recipes" ? (
          <Recipes changeActualScreen={changeActualScreen} />
        ) : (
          <Cooking changeActualScreen={changeActualScreen} />
        )}
        <MusicController isMusicActive={isMusicActive} changeMusicState={changeMusicState}/>
      </Provider>
    </div>
  );
}
