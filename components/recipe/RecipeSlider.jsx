import React, { useRef, useEffect, useState } from 'react';

import RecipeSliderNext from './Slider/RecipeSliderNext';
import RecipeSliderPrev from './Slider/RecipeSliderPrev';
import RecipeSliderSlide from './Slider/RecipeSliderSlide';

import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper';

import { nullCheck } from '../../utils';

SwiperCore.use([Navigation, Pagination]);

function RecipeSlider({ data }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  const containerRef = useRef(null);

  const [slider, setSlider] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (
      !nullCheck(slider) ||
      nullCheck(
        containerRef.current,
        nextRef.current,
        prevRef.current,
        paginationRef.current
      )
    )
      return;

    setSlider(
      new Swiper(containerRef.current, {
        slidesPerView: 'auto',
        speed: 500,
        grabCursor: true,
        navigation: {
          nextEl: nextRef.current,
          prevEl: prevRef.current,
        },
        pagination: {
          el: paginationRef.current,
          type: 'progressbar',
        },
        on: {
          slideChangeTransitionEnd: function ({ activeIndex }) {
            setCurrentSlide(activeIndex);
          },
        },
      })
    );

    return () => {
      if (nullCheck(slider)) return;
      slider.destroy();
      setSlider(null);
    };
  }, [containerRef, nextRef, prevRef, slider]);

  return (
    <section className='recipe-slider bg-gradient-to-br from-green-400 to-green-600 relative'>
      <div className='swiper-container' ref={containerRef}>
        <div className='swiper-wrapper'>
          {data.instructions.map((instruction, index) => (
            <RecipeSliderSlide
              instruction={instruction}
              currentSlide={currentSlide}
              slideIndex={index}
              key={instruction.instruction_id}
            />
          ))}
        </div>
      </div>

      <div
        className='swiper-pagination absolute bottom-0 h-10 w-screen'
        ref={paginationRef}
      ></div>

      <RecipeSliderNext
        ref={nextRef}
        isHidden={currentSlide === data.instructions.length - 1}
      />
      <RecipeSliderPrev ref={prevRef} isHidden={currentSlide === 0} />
    </section>
  );
}

export default RecipeSlider;
