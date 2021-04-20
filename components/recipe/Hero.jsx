import React from 'react';

import classNames from 'classnames';

function Hero({ data, classes }) {
  return (
    <div
      className={classNames(
        'w-screen min-h-500 lg:min-h-600 flex items-center relative',
        classes
      )}
    >
      <div className='container h-full'>
        <div className='flex flex-col justify-center h-full pb-20 xl:pb-70'>
          <h1 className='text-5xl lg:text-8xl xl:text-9xl font-extrabold text-gray-900 text-center tracking-tight leading-tight  mt-80 mb-40'>
            {data.heading}
          </h1>
          <p className='text-xl text-center w-10/12 mx-auto tracking-wider'>
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
