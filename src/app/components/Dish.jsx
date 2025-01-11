import Image from 'next/image'

export default function Dish({index, dish, setSelectedDishData, selectedDishIndex}) {

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
      ${index == selectedDishIndex ? 'bg-neon rounded-full shadow-neon-lg' : ''}
    `}
      onClick={() => setSelectedDishData(index, dish)}>
      <Image
        className={`max-h-[85%] w-auto z-0`}
        width={100}
        height={100}
        src={dish.src}
        alt={'Uma imagem de um delicioso prato de ' + dish.name}
      ></Image>
    </div>
  )
}