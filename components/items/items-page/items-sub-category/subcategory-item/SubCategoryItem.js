import Image from 'next/image';
import Link from 'next/link';

import { formatUrlToRoute } from '../../../../../helpers/formatUrl';

import { SubCategoryItemStyles } from './SubCategoryItemStyles';

export default function SubCategoryListItem({ subCategory, itemsTitle }) {
  return (
    <SubCategoryItemStyles>
      <Link
        href={{
          pathname: '/products/[items]/[collection]',
          query: {
            items: `${formatUrlToRoute(itemsTitle)}`,
            collection: `${formatUrlToRoute(subCategory.category_title)}`,
          },
        }}
      >
        <a>
          <Image
            className='sub-image'
            src={subCategory.single_item[0].image[0].url}
            width={200}
            height={200}
            alt={subCategory.single_item[0].item_title}
          />
        </a>
      </Link>
    </SubCategoryItemStyles>
  );
}
