import React from 'react';

import classNames from 'classnames';

function Hero({ data, classes }) {
  return (
    <div className={classNames('w-screen h-screen80 relative', classes)}>
      <div className='container h-full'>
        <div className='flex flex-col justify-center h-full pb-20 xl:pb-70'>
          <h1 className='text-5xl lg:text-8xl xl:text-9xl font-extrabold text-gray-900 text-center tracking-tight leading-tight mb-20'>
            {data.heading}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Hero;
