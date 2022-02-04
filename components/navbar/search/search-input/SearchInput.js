import { useState } from 'react';
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/client';

import debounce from 'lodash.debounce';

import SearchDropdown from '../search-dropdown/SearchDropdown';
import { SearchInputStyles } from './SearchInputStyles';

// search query
const SEARCH_QUERY = gql`
  query SEARCH_QUERY($searchTerm: String!) {
    singleItems(
      where: {
        _or: [
          { item_title_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
      }
    ) {
      items_categories {
        category: category_title
        items {
          title
        }
      }
      id
      itemTitle: item_title
      description
      image {
        url
      }
    }
  }
`;

export default function SearchInput() {
  const [term, setTerm] = useState('');

  const [findItems, { data, loading, error }] =
    useLazyQuery(SEARCH_QUERY, {
      fetchPolicy: 'no-cache',
      ssr: false,
    });

  if (error) console.log('error');
  if (loading) console.log('loading');

  const findItemsButChill = debounce(findItems, 350);

  const onChangeHandler = event => {
    setTerm(event.target.value);

    findItemsButChill({
      variables: {
        searchTerm: term,
      },
    });
  };

  const foundItems = data?.singleItems || [];

  return (
    <>
      <SearchInputStyles
        type='text'
        placeholder='Search...'
        onChange={onChangeHandler}
      />
      <SearchDropdown foundItems={foundItems} />
    </>
  );
}
