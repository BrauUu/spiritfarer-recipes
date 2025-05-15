import React from "react";
import Image from 'next/image'

import { IngredientSecondary } from "./Ingredient";
import Title from "./Title";

export default function DishDetails({ selectedDish }) {
  return (
    <div className="w-full gap-2 px-2 md:py-8 flex flex-col justify-between items-center text-center py-2">
      <div className="w-full flex flex-col items-center">
        <div className="w-full flex flex-col items-center py-2 md:py-4">
          <Image
            alt={'Uma imagem de um delicioso prato de ' + selectedDish.name}
            className="h-16 md:h-[80px] w-auto"
            src={selectedDish.src}
            height={100}
            width={100}
            priority={true}
          >
          </Image>
          <Title type='secondary' text={selectedDish.name} />
        </div>
        <div className="text-secondary font-light flex flex-col gap-y-2 pt-2 ">
          <span>{selectedDish.description}</span>
          <div className="flex md:gap-0 flex-col">
            <span>
              Tamanho: <span className="text-highlight font-semibold uppercase">{selectedDish.size}</span>
            </span>
            <span>
              Tipo: <span className="text-highlight font-semibold uppercase">{selectedDish.type}</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-secondary gap-2">
        {
          selectedDish.ingredients.map((ingredient, i) => {
            return <IngredientSecondary ingredient={ingredient} key={i} />
          })
        }
      </div>
    </div>
  )
}