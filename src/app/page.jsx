"use client";

import React, { useState, useEffect } from "react";
import { Provider } from "./Context";
import Recipes from "./pages/Recipes";
import Cooking from "./pages/Cooking";

export default function App() {
  const [actualScreen, setActualScreen] = useState(null);

  useEffect(() => {
    setActualScreen("recipes");
  }, []);

  function changeActualScreen() {
    setActualScreen((prev) => (prev === "recipes" ? "cooking" : "recipes"));
  }

  if (!actualScreen) return null

  return (
    <div className="h-screen flex justify-center items-center">
      <Provider>
        {actualScreen === "recipes" ? (
          <Recipes changeActualScreen={changeActualScreen} />
        ) : (
          <Cooking changeActualScreen={changeActualScreen} />
        )}
      </Provider>
    </div>
  );
}
