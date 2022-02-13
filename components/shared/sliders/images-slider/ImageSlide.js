import Image from 'next/image';

import placeholderImg from '../../../../public/img/img.svg';
import { ImageSlideStyles} from './ImageSlideStyles';

export default function ImageSlide({ itemsByIndex, index, title }) {
  return (
    <ImageSlideStyles>
      <Image
        className='embla__slide__img item-image'
        src={itemsByIndex(index)?.url}
        alt={title}
        width={300}
        height={300}
        layout='responsive'
        placeholder='blur'
        blurDataURL={placeholderImg}
      />
    </ImageSlideStyles>
  );
}
