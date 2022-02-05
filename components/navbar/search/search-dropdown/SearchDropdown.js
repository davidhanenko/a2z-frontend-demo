import Link from 'next/link';
import Image from 'next/image';

import { MdOutlineClose } from 'react-icons/md';

import { formatUrlToRoute } from '../../../../helpers/formatUrl';
import {
  AllResultsStyles,
  CloseBtnStyles,
  DropdownItemStyles,
  SearchDropdownStyles,
} from './SearchDropdownStyles';

export default function SearchDropdown({
  foundItems,
  setTerm,
  foundItemsCount,
}) {
  // close search dropdown / clear input
  const handleClose = () => {
    return setTerm('');
  };

  return (
    <SearchDropdownStyles>
      {foundItems.map(item => (
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
          <DropdownItemStyles>
            <Image
              src={item.image[0].url}
              alt={item.itemTitle}
              width={25}
              height={25}
            />
            <p>{item.itemTitle}</p>
          </DropdownItemStyles>
        </Link>
      ))}
      
      <AllResultsStyles>{foundItemsCount !== 0 ? foundItemsCount : `Nothing found`}</AllResultsStyles>
      <CloseBtnStyles type='button' onClick={handleClose}>
        <MdOutlineClose />
      </CloseBtnStyles>
    </SearchDropdownStyles>
  );
}
