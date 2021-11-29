import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { SlideStyles } from './SlideStyles';

export default function Silde({
  mediaByIndex,
  index,
  setAnimation,
  animation,
}) {
  const Btn = React.forwardRef(({ onClick, href, title }, ref) => {
    return (
      <a href={href} ref={ref}>
        {title}
      </a>
    );
  });

  useEffect(() => {
    let mounted = true;
    mounted && setAnimation(false);
    return () => (mounted = false);
  }, [animation]);


  return (
    <SlideStyles>
      <Image
        className='embla__slide__img'
        src={mediaByIndex(index).bg}
        objectFit='cover'
        layout='fill'
        alt=''
      />
      <div className='image-1'>
        <Image width={200} height={200} src={mediaByIndex(index).img1} />
      </div>
      <div className='image-2'>
        <Image width={200} height={200} src={mediaByIndex(index).img2} />
      </div>
      <a href={mediaByIndex(index).link}>
        <button className='slide-btn' type='button'>
          {mediaByIndex(index).btn}
        </button>
      </a>

      <div className='slide-header'>
        <h2>{mediaByIndex(index).text1}</h2>
        <h4>{mediaByIndex(index).text2}</h4>
      </div>
    </SlideStyles>
  );
}

// https://stackoverflow.com/questions/62257837/how-can-i-disable-cache-on-a-specific-page-only-in-next-js
