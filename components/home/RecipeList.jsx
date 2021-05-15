import classNames from 'classnames';
import React from 'react';

import RecipeCard from '../global/RecipeCard';

function RecipeList({ recipes }) {
  return (
    <section className='home-recipeList'>
      <div className='container'>
        <div className='row flex xl-max:flex-col xl:flex-wrap xxl:w-10/12 mx-auto'>
          {recipes.map((recipe, index) => {
            return (
              <div
                className={classNames(
                  'column w-full md:w-8/12 xl:w-4/12 mb-30 flex',
                  { 'xl-max:self-end': index % 2 === 0 }
                )}
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
