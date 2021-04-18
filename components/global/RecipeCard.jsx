import React from 'react';

import RecipeCategory from './RecipeCategory';

import Clock from '../../assets/svg/clock.svg';
import Easy from '../../assets/svg/easy.svg';
import Intermediate from '../../assets/svg/intermediate.svg';
import Hard from '../../assets/svg/hard.svg';

import { secondsToTimeString, toNameCase } from '../../utils';

function RecipeCard({ recipe: { categories, duration, difficulty, name } }) {
  return (
    <article className='flex flex-col w-full rounded-10 overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-500 group'>
      <div className='pt-6/12 bg-green-500 relative'>
        <img
          src='https://i2.wp.com/completelydelicious.com/wp-content/uploads/2021/02/yeast-raised-doughnuts-6-660x880.jpg'
          className='object-cover-absolute'
        />

        <div className='absolute inset-0 bg-gray-900 bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-500'></div>

        <div className='flex space-x-10 absolute bottom-0 right-0 mr-10 transform translate-y-6/12'>
          {categories.map((category, index) => {
            return <RecipeCategory category={category.slug} key={index} />;
          })}
        </div>
      </div>
      <div className='flex flex-col h-full p-20'>
        <div className='flex items-center mb-30'>
          <div className='flex items-center mr-20'>
            <span className='block w-20 min-w-20 mr-5'>
              <Clock />
            </span>

            <span className='text-sm font-light'>
              {secondsToTimeString(duration)}
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
    </article>
  );
}

export default RecipeCard;
