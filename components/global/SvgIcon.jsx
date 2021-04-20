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

function SvgIcon({ icon, width, height }) {
  const ratio = Math.round((height / width) * 100, 2);

  return (
    <span className='inline-svg' style={{ paddingTop: `${ratio}%` }}>
      {icon === 'bread' && <Bread />}
      {icon === 'spreads_sauces_fillings' && <Jam />}
      {icon === 'doughnuts' && <Doughnut />}
      {icon === 'sweet' && <Sweet />}
      {icon === 'pie' && <Pie />}
      {icon === 'savoury' && <Chicken />}
      {icon === 'cupcakes' && <Cupcake />}
      {icon === 'cookies' && <Cookie />}
      {icon === 'fish' && <Fish />}
      {icon === 'burgers' && <Hamburger />}
      {icon === 'meat' && <Meat />}
      {icon === 'pizza' && <PizzaSlice />}
      {icon === 'soup' && <Soup />}
      {icon === 'stir_fry' && <Ramen />}
      {icon === 'salad' && <Salad />}
      {icon === 'chilli_stew' && <Pot />}
      {icon === 'pasta' && <Spaghetti />}
      {icon === 'milkshakes_smoothies' && <Milkshake />}
      {icon === 'pastry' && <RollingPin />}
    </span>
  );
}

export default SvgIcon;
