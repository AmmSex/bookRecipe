import React from 'react'
import IngredientsList from '../IngredientsList'
import Instructions from '../Instructions'

export default function Recipe({ title, ingredients, steps }) {
    return (
      <section id="baked-salmon">
        <h1>{title}</h1>
        <IngredientsList ingredients={ingredients}/>
        <section className="instructions">
          <h3>Cooking Instructions</h3>
          <Instructions steps={steps} />
        </section>
      </section>
    );
  }