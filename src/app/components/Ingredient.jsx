import Image from 'next/image'
import { useEffect, useState } from 'react'

export const IngredientPrimary = ({ index, ingredient, changeActualIngredient, actualIngredientIndex, addIngredientToRecipeByClicking }) => {
  return (
    <div className={`
      ${index == actualIngredientIndex ? '' : 'border-secondary-neon border-[1px] border-solid '} 
      rounded-xl 
      aspect-square 
      h-[70px] 
      w-[70px]`}>
      <div
        className={`
          flex 
          justify-center 
          items-center 
          rounded-full
          cursor-pointer
          w-full 
          h-full
          ${index == actualIngredientIndex ? 'active bg-neon rounded-full shadow-neon-lg' : 'bg-[radial-gradient(circle,_var(--secondary-bg)_10%,_transparent_70%)]'}  
        `}
        onClick={() => {
          addIngredientToRecipeByClicking(ingredient)
          changeActualIngredient(index)
        }
        }
      >
        {
          ingredient ?
            <img
              className='max-h-[70%] w-auto h-auto max-w-[70%]'
              width={100}
              height={100}
              alt={`Uma imagem de um(a) ${ingredient.name}`}
              src={ingredient.src}
              loading='eager'
              decoding={'sync'}
            ></img>
            :
            undefined
        }
      </div>
    </div>
  )
}

export const IngredientBox = ({ ingredient, removeIngredientFromRecipe }) => {
  return (
    <div className="border-secondary-neon border-[1px] border-solid  rounded-xl h-[70px] w-[70px]"
      onClick={() => {
        if(ingredient){
          removeIngredientFromRecipe(ingredient)
        }
      }}
    >
      <div
        className={`
      flex 
      justify-center 
      items-center 
      rounded-full
      cursor-pointer
      w-full 
      h-full
      bg-[radial-gradient(circle,_var(--secondary-bg)_10%,_transparent_70%)]
    `}
      >
        {
          ingredient ?
            <img
              className='max-h-[70%] w-auto h-auto max-w-[70%]'
              width={100}
              height={100}
              alt={`Uma imagem de um(a) ${ingredient.name}`}
              src={ingredient.src}
              loading='eager'
              decoding={'sync'}
            ></img>
            :
            undefined
        }
      </div>
    </div>
  )
}

export const IngredientSecondary = ({ ingredient }) => {

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
      <div className="border-secondary-neon border-[1px] border-solid md:mb-2 rounded-xl h-16 md:h-[70px] aspect-square">
        <div
          className="flex justify-center items-center rounded-full w-full h-full bg-[radial-gradient(circle,_var(--secondary-bg)_10%,_transparent_70%)]"
        >
          {
            ingredientImage ?
              <img
                className='max-h-[70%] w-auto h-auto max-w-[70%]'
                width={100}
                height={100}
                alt={`Uma imagem de um(a) ${ingredient.name}`}
                src={ingredientImage}
                loading='eager'
                decoding={'sync'}
              ></img>
              :
              undefined
          }
        </div>
      </div>
      <span className='h-[45px] w-[100px] flex items-center justify-center'>{ingredientName}</span>
    </div>
  )
}