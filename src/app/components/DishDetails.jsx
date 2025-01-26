import React from "react";
import Image from 'next/image'

import Line from "./Line";
import Ingredient from "./Ingredient";
import Title from "./Title";

export default function DishDetails({ selectedDish }) {
  return (
    <div className="w-full gap-2 px-2 py-8 flex flex-col justify-between items-center text-center max-md:py-0 max-md:flex-row">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center py-4">
          <Image
            alt={'Uma imagem de um delicioso prato de ' + selectedDish.name}
            className="h-[80px] w-auto"
            src={selectedDish.src}
            height={100}
            width={100}
          >
          </Image>
          <Title type='secondary' text={selectedDish.name} />
        </div>
        <div className="text-secondary font-light flex flex-col gap-y-2 pt-2 ">
          <span>{selectedDish.description}</span>
          <div className="flex flex-col">
            <span>
              Tamanho: <span className="text-highlight font-semibold uppercase">{selectedDish.size}</span>
            </span>
            <span>
              Tipo: <span className="text-highlight font-semibold uppercase">{selectedDish.type}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-secondary gap-2 max-md:flex-wrap">
        {
          selectedDish.ingredients.map((ingredient, i) => {
            return <Ingredient ingredient={ingredient} key={i} />
          })
        }
      </div>
    </div>
  )
}