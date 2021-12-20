import Head from 'next/head';
import { Parallax } from 'react-scroll-parallax';

import bg_1 from '../../public/img/bg_1.jpg';
import bg_2 from '../../public/img/bg_2.jpg';
import bg_3 from '../../public/img/bg_3.jpg';
import img_1 from '../../public/img/img_1.png';
import img_2 from '../../public/img/img_2.png';
import img_3 from '../../public/img/img_3.png';
import sink_1 from '../../public/img/sink-1.png';
import sink_2 from '../../public/img/sink-2.png';
import tool_1 from '../../public/img/tool-1.png';
import tool_2 from '../../public/img/tool-2.png';

import BannerSlider from '../shared/sliders/banner-slider/BannerSlider';
import ItemsMainPage from '../items/main-page/ItemsMainPage';
import {MainStyles} from './MainStyles';

const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());

export default function Main() {
  const media = [
    {
      bg: bg_2,
      img1: tool_1,
      img2: tool_2,
      btn: 'view more',
      text1: 'tools, blades & more',
      text2: 'to get it done',
      link: 'tools',
    },
    {
      bg: bg_1,
      img1: sink_1,
      img2: sink_2,
      btn: 'view more',
      text1: 'sinks',
      text2: 'all kinds and sizes',
      link: '/products',
    },
    {
      bg: bg_3,
      img1: img_2,
      img2: img_3,
      btn: 'view more',
      text1: 'products',
      text2: 'for any situation',
      link: '/products',
    },
  ];

  // func from Embla Carousel docs
  const mediaByIndex = index => media[index % media.length];

  return (
    <MainStyles>
      <Head>
        <title>A2Z</title>
      </Head>
      {/* <Parallax y={[-80, 50]}> */}
      <BannerSlider slides={slides} mediaByIndex={mediaByIndex} />
      {/* </Parallax> */}
      {/* <Parallax y={[-20, 20]}> */}
      <ItemsMainPage />


      {/* </Parallax> */}
      {/* <Parallax y={[0, 0]}>
        <EmblaCarousel slides={slides} mediaByIndex={mediaByIndex} />
      </Parallax>

      <Parallax y={[0, 0]}>
        <EmblaCarousel slides={slides} mediaByIndex={mediaByIndex} />
      </Parallax> */}
    </MainStyles>
  );
}
