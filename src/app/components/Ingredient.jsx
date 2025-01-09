import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Ingredient({ ingredient }) {

  const [ingredientName, setIngredientName] = useState()
  const ingredientsNames = ingredient.name.split('/')

  useEffect(() => {
    setIngredientName(ingredientsNames[0])
    if (ingredientsNames.length > 1) {
      let i = 1
      const intervalId = setInterval(() => {
        console.log(i)
        setIngredientName(ingredientsNames[i])
        i += 1
        if(i >= ingredientsNames.length) {
          i = 0
        }
      }, 1000)
      return () => {
        clearInterval(intervalId)
      }
    }
  }, [ingredient])

  return (
    <div className={`flex flex-col justify-start items-center`}>
      <div className="border-secondary-neon border-[1px] border-solid mb-2 rounded-xl h-[70px] w-[70px]">
        <div
          className="flex justify-center items-center rounded-full w-full h-full"
          style={{ "background": "radial-gradient(circle, var(--secondary-bg) 10%, transparent 70%)" }}
        >
          <Image
            className='max-h-[70%] w-auto h-auto max-w-[70%]'
            width={100}
            height={100}
            alt={`Uma imagem de um(a) ${ingredient.name}`}
            src={ingredient.src}
          ></Image>
        </div>
      </div>
      <span className='h-[20px] w-[100px]'>{ingredientName}</span>
    </div>
  )
}