import { isNull } from 'lodash';
import React, { useRef, useEffect, useState } from 'react';

import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper';

import RecipeSliderNext from './Slider/RecipeSliderNext';
import RecipeSliderPrev from './Slider/RecipeSliderPrev';
import RecipeSliderSlide from './Slider/RecipeSliderSlide';

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
      !isNull(slider) ||
      isNull(containerRef.current) ||
      isNull(nextRef.current) ||
      isNull(prevRef.current) ||
      isNull(paginationRef.current)
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
      if (isNull(slider)) return;
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
      <RecipeSliderNext ref={nextRef} />
      <RecipeSliderPrev ref={prevRef} />
      <div
        className='swiper-pagination absolute bottom-0 h-10 w-screen'
        ref={paginationRef}
      ></div>
    </section>
  );
}

export default RecipeSlider;
