import classNames from 'classnames';
import React from 'react';

function Hero({ data: { heading }, classes = '' }) {
  return (
    <section className={classNames('global-hero', classes)}>
      <div className='container h-full pt-150'>
        <div className='flex flex-col justify-center h-full pb-20 xl:pb-70'>
          {heading && (
            <h1 className='text-5xl lg:text-8xl xl:text-9xl font-extrabold text-grey-900 xl:tracking-tight leading-tight mb-20 text-center'>
              {heading}
            </h1>
          )}
        </div>
      </div>
    </section>
  );
}

export default Hero;
