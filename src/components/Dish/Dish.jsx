import './Dish.css'

export default function Dish (props) {

  const dish = props.dish
  const setDish = props.setDish

  function setSelectedDish() {
    setDish(dish)
  }

  return (
    <div className="dish-div" onClick={setSelectedDish}>
      <img className="dish-image" alt={'Uma imagem de um delicioso prato de ' + dish.name} src={dish.src}></img>
    </div>
  )
}