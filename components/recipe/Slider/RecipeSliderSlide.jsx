import React, { useRef, useEffect } from 'react';

import { isNull, isUndefined } from 'lodash';
import classNames from 'classnames';

function RecipeSliderSlide({ instruction, currentSlide, slideIndex }) {
  const instructionRef = useRef(null);

  useEffect(() => {
    if (isNull(instructionRef.current) || isUndefined(document)) return;

    const Splitting = require('splitting');
    Splitting({
      target: instructionRef.current,
      by: 'words',
    });
  }, [instructionRef]);

  return (
    <div className='swiper-slide flex items-center justify-center min-h-screen h-screen min-w-screen w-screen'>
      <div className='container'>
        <div className='w-10/12 mx-auto'>
          <p
            className={classNames(
              'text-white text-6xl text-center font-semibold tracking-wide leading-normal',
              { animate: slideIndex === currentSlide }
            )}
            data-animate='words-fade-up'
            ref={instructionRef}
          >
            {instruction.body}
          </p>
        </div>
      </div>
    </div>
  );
}

export default RecipeSliderSlide;
