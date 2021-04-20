import React from 'react';
import SvgIcon from './SvgIcon';

function RecipeCategory({ category }) {
  return (
    <div className='rounded-full bg-white p-10 flex items-center justify-center'>
      <span className='block w-40 min-w-40 text-gray-900'>
        <SvgIcon icon={category} width={1} height={1} />
      </span>
    </div>
  );
}

export default RecipeCategory;
