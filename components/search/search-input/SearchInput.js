import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
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
  const [foundItems, setFoundItems] = useState([]);

  const router = useRouter();

  const [findItems, { data, loading }] = useLazyQuery(
    SEARCH_QUERY,
    {
      fetchPolicy: 'no-cache',
      ssr: false,
    }
  );

  const findItemsButChill = debounce(findItems, 350);

  const onChangeHandler = event => {
    setTerm(event.target.value);
  };

  // go to search results page after input submit
  const handleSearchInputSubmit = event => {
    if (event.key === 'Enter') {
      router.push({
        pathname: '/search/[searchQuery]',
        query: {
          searchQuery: term,
        },
      });
    }
  };

  const foundItemsCount = foundItems?.length;

  const itemsToRender = foundItems?.slice(0, 5);

  // set new value to search query on each input term change
  useEffect(() => {
    findItemsButChill({
      variables: {
        searchTerm: term,
      },
    });
    setFoundItems(data?.singleItems);
  }, [term]);

  return (
    <>
      <SearchInputStyles
        type='text'
        placeholder='Search...'
        onChange={onChangeHandler}
        value={term}
        className={loading ? 'loading' : ''}
        onKeyDown={handleSearchInputSubmit}
      />
      {term && !loading && foundItems && (
        <SearchDropdown
          foundItems={itemsToRender}
          term={term}
          setTerm={setTerm}
          foundItemsCount={foundItemsCount}
          loading={loading}
        />
      )}
    </>
  );
}
