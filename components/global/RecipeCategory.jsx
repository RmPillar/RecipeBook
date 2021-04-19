import React from 'react';

import Bread from '../../assets/svg/bread.svg';
import Jam from '../../assets/svg/jam.svg';
import Cupcake from '../../assets/svg/cupcake.svg';
import Sweet from '../../assets/svg/sweet.svg';
import Doughnut from '../../assets/svg/doughnut.svg';
import Pie from '../../assets/svg/pie.svg';
import Chicken from '../../assets/svg/chicken.svg';
import Cookie from '../../assets/svg/cookie.svg';
import Fish from '../../assets/svg/fish.svg';
import Hamburger from '../../assets/svg/hamburger.svg';
import Meat from '../../assets/svg/meat.svg';
import PizzaSlice from '../../assets/svg/pizza-slice.svg';
import Soup from '../../assets/svg/soup.svg';
import Salad from '../../assets/svg/salad.svg';
import Ramen from '../../assets/svg/ramen.svg';
import Spaghetti from '../../assets/svg/spaghetti.svg';
import Pot from '../../assets/svg/pot.svg';
import Milkshake from '../../assets/svg/milkshake.svg';
import RollingPin from '../../assets/svg/rolling-pin.svg';

function RecipeCategory({ category }) {
  return (
    <div className='rounded-full bg-white p-10 flex items-center justify-center'>
      <span className='block w-40 min-w-40 text-gray-900'>
        <span className='inline-svg pt-full'>
          {category === 'bread' && <Bread />}
          {category === 'spreads_sauces_fillings' && <Jam />}
          {category === 'doughnuts' && <Doughnut />}
          {category === 'sweet' && <Sweet />}
          {category === 'pie' && <Pie />}
          {category === 'savoury' && <Chicken />}
          {category === 'cupcakes' && <Cupcake />}
          {category === 'cookies' && <Cookie />}
          {category === 'fish' && <Fish />}
          {category === 'burgers' && <Hamburger />}
          {category === 'meat' && <Meat />}
          {category === 'pizza' && <PizzaSlice />}
          {category === 'soup' && <Soup />}
          {category === 'stir_fry' && <Ramen />}
          {category === 'salad' && <Salad />}
          {category === 'chilli_stew' && <Pot />}
          {category === 'pasta' && <Spaghetti />}
          {category === 'milkshakes_smoothies' && <Milkshake />}
          {category === 'pastry' && <RollingPin />}
        </span>
      </span>
    </div>
  );
}

export default RecipeCategory;
