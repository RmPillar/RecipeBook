import React from 'react';
import RecipeBook from '../../assets/svg/recipebook.svg';

function Logo(props) {
  return (
    <span className='flex items-center'>
      <span className='block w-45 min-w-45 mr-10'>
        <RecipeBook />
      </span>
      <span className='uppercase tracking-widest'>Recipebook</span>
    </span>
  );
}

export default Logo;
