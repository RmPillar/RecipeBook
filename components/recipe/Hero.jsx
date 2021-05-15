import React from 'react';

import classNames from 'classnames';

import { secondsToTimeString } from '../../utils';

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
          <h1 className='text-5xl lg:text-8xl xl:text-9xl font-extrabold text-gray-900 xl:text-center tracking-tight leading-tight mt-100 mb-20 xl:mb-40'>
            {data.name}
          </h1>
          <p className='text-xl xl:text-center xl:w-10/12 mx-auto tracking-wider mb-30'>
            {data.description}
          </p>

          <div className='xl:flex justify-center xl:space-x-50'>
            <p className='text-xl font-semibold'>
              Prep Time: {secondsToTimeString(data.contact_time)}
            </p>
            <p className='text-xl font-semibold'>
              Total Time: {secondsToTimeString(data.total_time)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
