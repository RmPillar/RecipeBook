import React from 'react';
import classNames from 'classnames';

import HeroBase from '../../assets/svg/hero-base.svg';

function Hero({ data, classes }) {
  return (
    <div
      className={classNames(
        'w-screen h-screen80 bg-indigo-500 relative',
        classes
      )}
    >
      <div className='container h-full'>
        <div className='flex flex-col justify-center h-full pb-20 xl:pb-70'>
          <h1 className='text-5xl lg:text-8xl xl:text-9xl font-bold text-white mb-20'>
            {data.heading}
          </h1>
          <h6 className='text-xl lg:text-3xl text-white font-thin'>
            {data.tagline}
          </h6>
        </div>
      </div>
      <span className='w-screen absolute bottom-0 text-white -mb-1'>
        <HeroBase />
      </span>
    </div>
  );
}

export default Hero;
