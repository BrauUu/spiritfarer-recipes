import './Ingredient.css'

export default function Ingredient (props){
  const ingredient = props.ingredient

  return(
    <div className="ingredient-div">
      <div className="ingredient-card">
          <img className="ingredient-image" alt={ingredient.name}src={ingredient.src}></img>
      </div>
      <span>{ingredient.name}</span>
    </div>
  )
}