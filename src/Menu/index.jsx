import React from 'react'
import Recipe from '../Recipe'

function Menu({ recipes, title }) {
    return (
      <article>
        <header>
          <h1>{title}</h1>
        </header>
        <div className="recipes">
          {recipes.map((el, i) => (
            <Recipe key={i} {...el} />
          ))
        }
        </div>
      </article>
    );
  }


export default Menu