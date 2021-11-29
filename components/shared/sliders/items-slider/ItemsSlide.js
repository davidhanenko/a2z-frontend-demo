import Image from 'next/image';
import Link from 'next/link';
import { formatUrlToRoute } from '../../../../helpers/formatUrl';

import { ItemsSlideStyles, ImageOverlay } from './ItemsSlideStyles';

export default function Slide({ itemsByIndex, index }) {
  return (
    <ItemsSlideStyles>
      <Link
        href={{
          pathname: '/products/[products]',
          query: {
            products: `${formatUrlToRoute(itemsByIndex(index).title)}`,
          },
        }}
        key={itemsByIndex(index).id}
      >
        <a>
          <div className='item'>
            <h3 className='item-title'>{itemsByIndex(index).title}</h3>

            <ImageOverlay />
            <Image
              className='embla__slide__img item-image'
              src={itemsByIndex(index)?.category[0]?.single_item[0]?.image[0].url}
              width={300}
              height={300}
              layout='responsive'
            />
          </div>
        </a>
      </Link>
    </ItemsSlideStyles>
  );
}
