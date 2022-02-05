import { useEffect, useState } from 'react';
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
      category: items_categories(limit: 1) {
        categoryTitle: category_title
        items(limit: 1) {
          title
          services(limit: 1) {
            service
          }
        }
      }
      id
      itemTitle: item_title
      description
      image(limit: 1) {
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

  const findItemsButChill = debounce(findItems, 350);

  const onChangeHandler = event => {
    setTerm(event.target.value);
  };

  // set new value to search query on each input term change
  useEffect(() => {
    findItemsButChill({
      variables: {
        searchTerm: term,
      },
    });
  }, [term]);

  const foundItems = data?.singleItems || [];

  const foundItemsCount = foundItems.length;
  if (error) console.log('error');
  // if (loading) return <h4>Loading...</h4>;

  return (
    <>
      <SearchInputStyles
        type='text'
        placeholder='Search...'
        onChange={onChangeHandler}
        value={term}
      />
      {term && (
        <SearchDropdown
          foundItems={foundItems}
          setTerm={setTerm}
          foundItemsCount={foundItemsCount}
        />
      )}
    </>
  );
}
