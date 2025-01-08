import Image from 'next/image'

export default function Dish({dish, setSelectedDish}) {

  return (
    <div className={`
      flex
      items-center
      justify-center
      cursor-pointer
      hover:bg-neon 
      hover:rounded-full 
      hover:shadow-neon-lg
      p-1
    `}
      onClick={() => setSelectedDish(dish)}>
      <Image
        className={`max-h-[85%] w-auto`}
        width={100}
        height={100}
        src={dish.src}
        alt={'Uma imagem de um delicioso prato de ' + dish.name}
      ></Image>
    </div>
  )
}