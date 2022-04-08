import Image from 'next/image';
import Link from 'next/link';

import { formatUrlToRoute } from '../../../../helpers/formatUrl';
import placeholderImg from '../../../../public/img/img.svg';
import { FoundItemStyles } from './FoundItemStyles';

export default function FoundItem({ item }) {
  // service
  const service = formatUrlToRoute(
    item.category[0].items[0].services[0].service
  );
  // category of items
  const items = formatUrlToRoute(
    item.category[0].items[0].title
  );
  // collection of items
  const collection = formatUrlToRoute(
    item.category[0].categoryTitle
  );
  // single item
  const singleItem = formatUrlToRoute(item.itemTitle);

  return (
    <FoundItemStyles>
      <Link
        href={{
          pathname: `/[service]/[items]/[collection]/[single]`,
          query: {
            service: `${service}`,
            items: `${items}`,
            collection: `${collection}`,
            single: `${singleItem}`,
          },
        }}
      >
        <a>
          <Image
            className='item-img'
            src={item?.image[0]?.url}
            alt={item?.itemTitle}
            width={200}
            height={200}
            placeholder='blur'
            blurDataURL={placeholderImg}
          />
          <h3>{item?.itemTitle}</h3>
          <p>from...</p>
        </a>
      </Link>
    </FoundItemStyles>
  );
}
