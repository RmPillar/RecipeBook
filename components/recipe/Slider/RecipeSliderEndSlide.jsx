import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import Lottie from 'react-lottie';

import animationData from '../../../assets/lottie/tick.json';
import classNames from 'classnames';

function RecipeSliderEndSlide({ active }) {
  const [stopped, setStopped] = useState(true);
  const [showBackButton, setShowBackButton] = useState(false);

  useEffect(() => {
    if (active) setStopped(false);
  }, [active]);

  const options = {
    loop: false,
    autoplay: false,
    animationData,
  };

  const onLottieComplete = () => {
    setShowBackButton(true);
  };

  return (
    <div className='swiper-slide flex items-center justify-center min-h-screen h-screen min-w-screen w-screen'>
      <div className='container'>
        <div className='w-10/12 mx-auto flex flex-col items-center'>
          <span className='xl-max:hidden -mb-5'>
            <Lottie
              options={options}
              height={400}
              width={400}
              isStopped={stopped}
              eventListeners={[
                {
                  eventName: 'complete',
                  callback: onLottieComplete,
                },
              ]}
            />
          </span>
          <span className='xl:hidden -mb-5'>
            <Lottie
              options={options}
              height={200}
              width={200}
              isStopped={stopped}
              eventListeners={[
                {
                  eventName: 'complete',
                  callback: onLottieComplete,
                },
              ]}
            />
          </span>

          <Link href='/'>
            <a
              className={classNames(
                'text-4xl tracking-wider text-white transition-opacity duration-500 relative group overflow-x-hidden pt-5 pb-10',
                { 'opacity-0': !showBackButton }
              )}
            >
              Finish Baking
              <span className='absolute w-full h-5 inset-x-0 bottom-0 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out bg-white mr-1'></span>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RecipeSliderEndSlide;
