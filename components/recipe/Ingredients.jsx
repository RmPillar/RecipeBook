import React from 'react';

import HeroBase from '../../assets/svg/hero-base.svg';

import { parseQuantity } from '../../utils';

function Ingredients({ data }) {
  return (
    <section className='recipe-ingredientList'>
      <div className='w-full bg-indigo-500 relative'>
        <span className='w-screen absolute top-0 text-white transform -scale-y-100 -mt-1'>
          <HeroBase />
        </span>

        <div className='container py-150'>
          <div className='w-10/12 mx-auto'>
            <h2 className='text-6xl font-bold tracking-wider text-white mb-30'>
              Ingredients
            </h2>
            <div className='space-y-10'>
              {data.map((ingredient, index) => {
                const parsedQuantity = parseQuantity(ingredient.quantity);
                return (
                  <div className='flex' key={index}>
                    <h6 className='text-2xl text-white w-6/12'>
                      {ingredient.name}
                    </h6>
                    {parsedQuantity && (
                      <h6 className='text-2xl text-white mr-5'>
                        {parsedQuantity}
                      </h6>
                    )}
                    {ingredient.unit && (
                      <h6 className='text-2xl text-white'>{ingredient.unit}</h6>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ingredients;
