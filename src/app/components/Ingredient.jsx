import Image from 'next/image'

export default function Ingredient({ ingredient }) {
  return (
    <div className={`flex flex-col justify-start items-center max-w-[100px]`}>
      <div className="border-secondary-neon border-[1px] border-solid mb-2 rounded-xl p-2 h-20 w-20">
        <div
          className="flex justify-center items-center rounded-full w-full h-full" 
          style={{"background": "radial-gradient(circle, var(--secondary-bg) 10%, var(--primary-bg) 70%)"}}
        >
          <Image
            className='max-h-full w-auto'
            width={100}
            height={100}
            alt={`Uma imagem de um(a) ${ingredient.name}`}
            src={ingredient.src}
          ></Image>
        </div>
      </div>
      <span>{ingredient.name}</span>
    </div>
  )
}