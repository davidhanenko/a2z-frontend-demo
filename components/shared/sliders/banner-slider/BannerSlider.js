import React, { useState, useEffect, useCallback } from 'react';
import { useEmblaCarousel } from 'embla-carousel/react';
import { DotButton, PrevButton, NextButton } from '../SliderButtons';
import { useRecursiveTimeout } from '../../../../lib/useRecursiveTimeout';
import BannerSliderStyles from './BannerSliderStyles';

import Slide from './Slide';

const AUTOPLAY_INTERVAL = 4000;

const BannerSlider = ({ slides, mediaByIndex }) => {
  // animation state
  const [animation, setAnimation] = useState(false);
  // key state for slides
  const [carouselRandomNumber, setCarouselRandomNumber] = useState();

  const [viewportRef, embla] = useEmblaCarousel({
    loop: true,
    skipSnaps: false,
    speed: 8,
  });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const autoplay = useCallback(() => {
    if (!embla) return;
    if (embla.canScrollNext()) {
      embla.scrollNext();
      setCarouselRandomNumber(Math.random());
      setAnimation(true);
    } else {
      embla.scrollTo(0);
      setCarouselRandomNumber(Math.random());
      setAnimation(true);
    }
  }, [embla]);

  const { play, stop } = useRecursiveTimeout(autoplay, AUTOPLAY_INTERVAL);

  const scrollNext = useCallback(() => {
    if (!embla) return;
    setCarouselRandomNumber(Math.random());
    embla.scrollNext();
    stop();
  }, [embla, stop]);

  const scrollPrev = useCallback(() => {
    if (!embla) return;
    setCarouselRandomNumber(Math.random());
    embla.scrollPrev();
    stop();
  }, [embla, stop]);

  const scrollTo = useCallback(index => {
    embla && embla.scrollTo(index), [embla];
    setCarouselRandomNumber(Math.random());
  });

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
    embla.on('pointerDown', stop);

    // try to return if Embla don't
  }, [embla, onSelect, setScrollSnaps, stop]);

  useEffect(() => {
    play();
  }, [play]);

  return (
    <BannerSliderStyles>
      <div className='embla__viewport' ref={viewportRef}>
        <div className='embla__container'>
          {slides.map(index => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__inner'>
                <Slide
                  key={`${index}+${
                    selectedIndex === index ? carouselRandomNumber : index
                  }`}
                  mediaByIndex={mediaByIndex}
                  index={index}
                  setAnimation={setAnimation}
                  animation={animation}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      <div className='embla__dots'>
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </BannerSliderStyles>
  );
};


export default BannerSlider;
