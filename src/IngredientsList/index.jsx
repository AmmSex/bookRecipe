
import React from 'react'

const IngredientsList = ({ingredients}) => {
    return (
        <ul className="ingredients">
          {ingredients.map((el, i) => (
            <li key={i}>{el.name}</li>
          ))}
        </ul>
    )
}

export default  IngredientsList;