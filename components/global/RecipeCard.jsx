import React from 'react';

import Clock from '../../assets/svg/clock.svg';
import Easy from '../../assets/svg/easy.svg';
import Intermediate from '../../assets/svg/intermediate.svg';
import Hard from '../../assets/svg/hard.svg';

import { secondsToTimeString, toNameCase } from '../../utils';

function RecipeCard({ recipe }) {
  return (
    <article className='w-full rounded-10 overflow-hidden shadow-lg flex flex-col'>
      <div className='pt-6/12 bg-gradient-to-br from-green-400 to-green-600'></div>
      <div className='flex flex-col h-full p-20'>
        <div className='flex justify-between items-center mb-20'>
          <div className='flex items-center mr-20'>
            <span className='block w-30 min-30 mr-10'>
              <Clock />
            </span>
            <span>{secondsToTimeString(recipe.duration)}</span>
          </div>
          <div className='flex items-center'>
            <span className='block w-30 min-30 mr-10'>
              {recipe.difficulty === 'easy' && <Easy />}
              {recipe.difficulty === 'intermediate' && <Intermediate />}
              {recipe.difficulty === 'hard' && <Hard />}
            </span>
            <h6>{toNameCase(recipe.difficulty)}</h6>
          </div>
        </div>
        <h3 className='text-3xl font-bold tracking-wider text-gray-800 mt-auto'>
          {recipe.name}
        </h3>
      </div>
    </article>
  );
}

export default RecipeCard;
