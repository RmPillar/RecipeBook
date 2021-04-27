import React, { useRef } from 'react';

import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import SvgIcon from '../global/SvgIcon';

SwiperCore.use([Navigation, Pagination]);

function RecipeSlider({ data }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className='recipe-slider bg-gradient-to-br from-orange-400 to-orange-600 relative'>
      <Swiper
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
      >
        {data.instructions.map((instruction, index) => (
          <SwiperSlide key={index}>
            <div className='flex items-center justify-center min-h-screen h-screen min-w-screen w-screen'>
              <div className='container'>
                <div className='w-10/12 mx-auto'>
                  <p className='text-white text-6xl text-center font-semibold tracking-wide leading-normal'>
                    {instruction.body}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <button
          className='absolute left-0 inset-y-0 z-10'
          ref={prevRef}
          style={{ outline: 'none' }}
        >
          <span className='block w-75 min-w-75 text-white transform rotate-180'>
            <SvgIcon icon='chevron' width={1} height={1} />
          </span>
        </button>
        <button
          className='absolute right-0 inset-y-0 z-10'
          ref={nextRef}
          style={{ outline: 'none' }}
        >
          <span className='block w-75 min-w-75 text-white'>
            <SvgIcon icon='chevron' width={1} height={1} />
          </span>
        </button>
      </Swiper>
    </section>
  );
}

export default RecipeSlider;
