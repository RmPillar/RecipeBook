import React, { useState, useEffect } from 'react';

import Lottie from 'react-lottie';
import animationData from '../../../assets/lottie/tick.json';

function RecipeSliderEndSlide({ active }) {
  const [stopped, setStopped] = useState(true);

  useEffect(() => {
    if (active) setStopped(false);
  }, [active]);

  const options = {
    loop: false,
    autoplay: false,
    animationData,
  };
  return (
    <div className='swiper-slide flex items-center justify-center min-h-screen h-screen min-w-screen w-screen'>
      <div className='container'>
        <div className='w-10/12 mx-auto'>
          <Lottie
            options={options}
            height={400}
            width={400}
            isStopped={stopped}
          />
        </div>
      </div>
    </div>
  );
}

export default RecipeSliderEndSlide;
