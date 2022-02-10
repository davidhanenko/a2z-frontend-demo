import Image from 'next/image';
import Link from 'next/link';

import { formatUrlToRoute } from '../../../../../helpers/formatUrl';

import { SubCategoryItemStyles } from './SubCategoryItemStyles';
import placeholderImg from '../../../../../public/img/1.png'

export default function SubCategoryListItem({ subCategory, itemsTitle, service }) {
  return (
    <SubCategoryItemStyles>
      <Link
        href={{
          pathname: `/${service}/[items]/[collection]`,
          query: {
            items: `${formatUrlToRoute(itemsTitle)}`,
            collection: `${formatUrlToRoute(
              subCategory.category_title
            )}`,
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
            placeholder='blur'
            blurDataURL={placeholderImg}
          />
        </a>
      </Link>
    </SubCategoryItemStyles>
  );
}
