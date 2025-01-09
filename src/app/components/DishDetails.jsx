import React from "react";
import Image from 'next/image'

import Line from "./Line";
import Ingredient from "./Ingredient";
import Title from "./Title";

export default function DishDetails({ selectedDish }) {
  return (
    <div className="w-full px-2 flex flex-col justify-center items-center text-center">
      <div className="flex flex-col items-center">
        <div className="dish-image-div">
          <Image
            alt={'Uma imagem de um delicioso prato de ' + selectedDish.name}
            className="h-[80px] w-auto"
            src={selectedDish.src}
            height={100}
            width={100}
          >
          </Image>
        </div>
      </div>
      <Title type='secondary' text={selectedDish.name}/>
      <div className="flex flex-col gap-y-2 pt-2 text-secondary font-light">
        <div className="">
          <span>{selectedDish.description}</span>
        </div>
        <div className="flex flex-col">
          <span>
            Tamanho: <strong className="text-highlight font-semibold">{selectedDish.size.toUpperCase()}</strong>
          </span>
          <span>
            Tipo: <strong className="text-highlight font-semibold">{selectedDish.type.toUpperCase()}</strong>
          </span>
        </div>
        <div className=" flex justify-center">
          {
            selectedDish.ingredients.map((ingredient, i) => {
              return <Ingredient ingredient={ingredient} key={i} />
            })
          }
        </div>
      </div>
    </div>
  )
}