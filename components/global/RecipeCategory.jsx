import React from 'react';

import Bread from '../../assets/svg/bread.svg';
import Jam from '../../assets/svg/jam.svg';
import Cupcake from '../../assets/svg/cupcake.svg';
import Sweet from '../../assets/svg/sweet.svg';
import Doughnut from '../../assets/svg/doughnut.svg';
import Pie from '../../assets/svg/pie.svg';
import Chicken from '../../assets/svg/chicken.svg';

function RecipeCategory({ category }) {
  return (
    <div className='rounded-full bg-white p-10 flex items-center justify-center'>
      <span className='block w-40 min-w-40'>
        {category === 'bread' && <Bread />}
        {category === 'spreads_sauces_fillings' && <Jam />}
        {category === 'doughnuts' && <Doughnut />}
        {category === 'sweet' && <Sweet />}
        {category === 'pie' && <Pie />}
        {category === 'savoury' && <Chicken />}
      </span>
    </div>
  );
}

export default RecipeCategory;
