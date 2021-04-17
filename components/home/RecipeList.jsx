import React from 'react';

import RecipeCard from '../global/RecipeCard';

function RecipeList({ recipes }) {
  console.log(recipes);
  return (
    <section className='home-recipeList'>
      <div className='container'>
        <div className='row flex flex-wrap xl:w-10/12 mx-auto'>
          {recipes.map((recipe, index) => {
            return (
              <div className='column w-full md:w-6/12 xl:w-4/12 mb-30 flex'>
                <RecipeCard recipe={recipe} key={index} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RecipeList;
