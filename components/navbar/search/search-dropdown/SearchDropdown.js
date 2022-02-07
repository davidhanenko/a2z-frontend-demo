import React from 'react';
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
  term,
  setTerm,
  foundItemsCount,
  loading,
}) {
  // close search dropdown / clear input
  const handleClose = () => {
    return setTerm('');
  };

  //link to view all found items
  const SeeAllItemsLink = React.forwardRef(
    ({ href }, ref) => {
      return (
        <AllResultsStyles
          href={href}
          ref={ref}
          onClick={handleClose}
        >
          <p>
            See all(<span>{foundItemsCount}</span>) items
          </p>
        </AllResultsStyles>
      );
    }
  );
  if (loading) return <h4>Loading...</h4>;

  return (
    <SearchDropdownStyles>
      {foundItems && foundItems.map(item => (
        <Link
          key={item.id}
          href={{
            pathname: `/[service]/[items]/[collection]/[singleItem]`,
            query: {
              // service
              service: `${formatUrlToRoute(
                item?.category[0]?.items[0]?.services[0]
                  ?.service
              )}`,
              // items category
              items: `${formatUrlToRoute(
                item?.category[0]?.items[0]?.title
              )}`,
              // items collection
              collection: `${formatUrlToRoute(
                item?.category[0]?.categoryTitle
              )}`,
              // single item/finded item
              singleItem: `${formatUrlToRoute(
                item?.itemTitle
              )}`,
            },
          }}
        >
          <DropdownItemStyles>
            <Image
              src={item?.image[0]?.url}
              alt={item?.itemTitle}
              width={25}
              height={25}
            />
            <p>{item?.itemTitle}</p>
          </DropdownItemStyles>
        </Link>
      ))}
      {!loading && foundItemsCount !== 0 ? (
        <Link
          href={{
            pathname: `/search/[searchQuery]`,
            query: {
              searchQuery: term,
            },
          }}
          passHref
        >
          <SeeAllItemsLink />
        </Link>
      ) : (
        <li className='no-items'>
          Sorry. Nothing found for <em>{term}</em>
        </li>
      )}

      <CloseBtnStyles type='button' onClick={handleClose}>
        <MdOutlineClose />
      </CloseBtnStyles>
    </SearchDropdownStyles>
  );
}
