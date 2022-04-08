import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';

import { formatUrlToRoute } from '../../../../../helpers/formatUrl';

import placeholderImg from '../../../../../public/img/img.svg';
import { CollectionItemStyles } from './CollectionItemStyles';

export default function CollectionItem({
  item,
  items,
  collection,
}) {
  const router = useRouter();
  // current service
  const service = router.asPath.split('/')[1];

  return (
    <CollectionItemStyles>
      <Link
        href={{
          pathname: `/[service]/[items]/[collection]/[single]`,
          query: {
            service: `${formatUrlToRoute(service)}`,
            items: `${formatUrlToRoute(items)}`,
            collection: `${formatUrlToRoute(collection)}`,
            single: `${formatUrlToRoute(item.itemTitle)}`,
          },
        }}
      >
        <a>
          <Image
            src={item.image[0].url}
            width={200}
            height={200}
            alt={item.item_title}
            placeholder='blur'
            blurDataURL={placeholderImg}
          />
          <h4 className='collection-item-title'>
            {item.itemTitle}
          </h4>
        </a>
      </Link>
    </CollectionItemStyles>
  );
}
