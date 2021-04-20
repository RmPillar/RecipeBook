import React from 'react';

import RecipeCategory from './RecipeCategory';

import Clock from '../../assets/svg/clock.svg';
import Easy from '../../assets/svg/easy.svg';
import Intermediate from '../../assets/svg/intermediate.svg';
import Hard from '../../assets/svg/hard.svg';

import { secondsToTimeString, toNameCase } from '../../utils';
import Link from 'next/link';

function RecipeCard({
  recipe: { categories, total_time, difficulty, name, recipe_id },
}) {
  return (
    <Link href={`recipe/${recipe_id.toString()}`}>
      <a
        href={`recipe/${recipe_id.toString()}`}
        className='flex flex-col w-full rounded-10 overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500'
      >
        <div className='pt-6/12 bg-green-500 relative'>
          <div className='flex space-x-10 absolute bottom-0 right-0 mr-10 transform translate-y-6/12'>
            {categories.map((category, index) => {
              return <RecipeCategory category={category.slug} key={index} />;
            })}
          </div>
        </div>
        <div className='flex flex-col h-full px-20 pt-40 pb-30 relative z-10'>
          <div className='flex items-center justify-end mt-10 mb-5'>
            <div className='flex items-center mr-20'>
              <span className='block w-20 min-w-20 mr-5'>
                <Clock />
              </span>

              <span className='text-sm font-light'>
                {secondsToTimeString(total_time)}
              </span>
            </div>

            <div className='flex items-center'>
              <span className='block w-20 min-20 mr-5'>
                {difficulty === 'easy' && <Easy />}
                {difficulty === 'intermediate' && <Intermediate />}
                {difficulty === 'hard' && <Hard />}
              </span>

              <h6 className='font-light text-sm'>{toNameCase(difficulty)}</h6>
            </div>
          </div>

          <h3 className='text-3xl font-bold tracking-wider text-gray-800 mt-auto ml-auto'>
            {name}
          </h3>
        </div>
      </a>
    </Link>
  );
}

export default RecipeCard;
