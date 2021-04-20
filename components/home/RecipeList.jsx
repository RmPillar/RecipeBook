import React from 'react';

import RecipeCard from '../global/RecipeCard';

function RecipeList({ recipes }) {
  return (
    <section className='home-recipeList'>
      <div className='container'>
        <div className='row flex flex-wrap xxl:w-10/12 mx-auto'>
          {recipes.map((recipe, index) => {
            return (
              <div
                className='column w-full md:w-10/12 xl:w-4/12 mx-auto mb-30 flex'
                key={index}
              >
                <RecipeCard recipe={recipe} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default RecipeList;
