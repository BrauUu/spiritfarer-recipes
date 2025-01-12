import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Ingredient({ ingredient }) {

  const [ingredientName, setIngredientName] = useState()
  const [ingredientImage, setIngredientImage] = useState()

  const ingredientsNames = ingredient.name.split('/')
  const ingredientsImages = ingredient.src.split('|')

  useEffect(() => {
    setIngredientName(ingredientsNames[0])
    setIngredientImage(ingredientsImages[0])
    const ingredientsImagesLength = ingredientsImages.length
    const ingredientsNamesLength = ingredientsNames.length
    if (ingredientsNamesLength > 1) {
      let i = 1
      const intervalId = setInterval(() => {
        setIngredientName(ingredientsNames[i % ingredientsNamesLength])
        setIngredientImage(ingredientsImages[i % ingredientsImagesLength])
        i += 1
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
          {
            ingredientImage ?
            <Image
              className='max-h-[70%] w-auto h-auto max-w-[70%]'
              width={100}
              height={100}
              alt={`Uma imagem de um(a) ${ingredient.name}`}
              src={ingredientImage}
              loader={'eager'}
              decoding={'sync'}
            ></Image>
            :
            undefined
          }
        </div>
      </div>
      <span className='h-[45px] w-[100px] flex items-center justify-center'>{ingredientName}</span>
    </div>
  )
}