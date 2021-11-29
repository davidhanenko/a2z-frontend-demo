import Image from 'next/image';
import Link from 'next/link';

import { formatUrlToRoute } from '../../../../../helpers/formatUrl';

import { CollectionItemStyles } from './CollectionItemStyles';

export default function CollectionItem({ item, items, collection }) {
  return (
    <CollectionItemStyles>
      <Link
        href={{
          pathname: '/products/[items]/[collection]/[single]',
          query: {
            items: `${items}`,
            collection: `${collection}`,
            single: `${formatUrlToRoute(item.item_title)}`,
          },
        }}
      >
        <a>
          <Image
            src={item.image[0].url}
            width={200}
            height={200}
            alt={item.item_title}
          />
          <h4 className='collection-item-title'>{item.item_title}</h4>
        </a>
      </Link>
    </CollectionItemStyles>
  );
}
