import Image from 'next/image'

export default function Dish({dish, setSelectedDish}) {

  return (
    <div className={`
      flex
      items-center
      cursor-pointer
      hover:bg-neon 
      hover:rounded-full 
      hover:shadow-neon-sm
    `}
      onClick={() => setSelectedDish(dish)}>
      <Image
        className={`w-full p-2`}
        width={100}
        height={100}
        src={dish.src}
        alt={'Uma imagem de um delicioso prato de ' + dish.name}
      ></Image>
    </div>
  )
}