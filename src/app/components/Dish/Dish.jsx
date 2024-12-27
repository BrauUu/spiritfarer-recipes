import './Dish.css'

export default function Dish(props) {

  const dish = props.dish
  const setDish = props.setDish

  function setSelectedDish() {
    setDish(dish)
  }

  return (
    <div className={`
      w-full
      py-4
      flex
      justify-center
      items-center
      cursor-pointer
    `}
      onClick={setSelectedDish}>
      <img className={`w-4/5 dish-image md:w-1/2`} alt={'Uma imagem de um delicioso prato de ' + dish.name} src={dish.src} ></img>
    </div>
  )
}