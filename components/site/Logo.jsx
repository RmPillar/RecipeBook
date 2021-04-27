import React from 'react';
import classNames from 'classnames';

import RecipeBook from '../../assets/svg/recipebook.svg';

function Logo({ dark = false }) {
  return (
    <span className='flex items-center'>
      <span className='block w-45 min-w-45 mr-10'>
        <RecipeBook />
      </span>
      <span className='uppercase tracking-widest relative overflow-hidden'>
        Recipebook
        <span
          className={classNames(
            'absolute w-full h-2 inset-x-0 bottom-0 -ml-1 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out',
            {
              'bg-white': !dark,
              'bg-gray-900': dark,
            }
          )}
        ></span>
      </span>
    </span>
  );
}

export default Logo;
