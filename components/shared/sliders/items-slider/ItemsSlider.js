import React, { useState, useEffect, useCallback } from 'react';
import { PrevButton, NextButton } from '../SliderButtons';
import { useEmblaCarousel } from 'embla-carousel/react';
import ItemsSliderStyles from './ItemsSliderStyles';

import useWindowDimensions from '../../../../lib/windowDimensions';

import ItemsSlide from './ItemsSlide';

const ItemsSlider = ({ slides, itemsByIndex }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    slidesToScroll: 1,
    containScroll: 'keepSnap',
    skipSnaps: false,
    align: 0,
    loop: true,
  });

  const { width } = useWindowDimensions();

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  // const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    embla.on('select', onSelect);
    onSelect();
  }, [embla, onSelect]);

  useEffect(() => {
    if (width <= 850) {
      setPrevBtnEnabled(true);
      setNextBtnEnabled(true);
    }
  }, [width]);

  // useEffect(() => {
  //   if (emblaApi && emblaApi.slideNodes().length !== slides.length) {
  //     emblaApi.reInit();
  //   }
  // }, [emblaApi, slides]);

  return (
    <ItemsSliderStyles className='embla'>
      <div className='embla__viewport' ref={viewportRef}>
        <div className='embla__container'>
          {slides.map(index => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__inner'>
                <ItemsSlide itemsByIndex={itemsByIndex} index={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </ItemsSliderStyles>
  );
};

export default ItemsSlider;
