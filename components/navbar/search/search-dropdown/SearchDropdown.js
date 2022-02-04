import Link from 'next/link';
import Image from 'next/image';
import { formatUrlToRoute } from '../../../../helpers/formatUrl';

import {
  DropdownItemStyles,
  SearchDropdownStyles,
} from './SearchDropdownStyles';

export default function SearchDropdown({ foundItems }) {
  return (
    <SearchDropdownStyles>
      {foundItems.map(item => (
        <DropdownItemStyles>
          <Link
            key={item.id}
            href={{
              pathname: `/[service]/[items]/[collection]/[singleItem]`,
              query: {
                // service
                service: `${formatUrlToRoute(
                  item.category[0].items[0].services[0]
                    .service
                )}`,
                // items category
                items: `${formatUrlToRoute(
                  item.category[0].items[0].title
                )}`,
                // items collection
                collection: `${formatUrlToRoute(
                  item.category[0].categoryTitle
                )}`,
                // single item/finded item
                singleItem: `${formatUrlToRoute(
                  item.itemTitle
                )}`,
              },
            }}
          >
            <>
              <Image
                src={item.image[0].url}
                alt={item.itemTitle}
                width={25}
                height={25}
              />
              <p>{item.itemTitle}</p>
            </>
          </Link>
        </DropdownItemStyles>
      ))}
    </SearchDropdownStyles>
  );
}
