import { useState } from 'react';
import gql from 'graphql-tag';
import { useLazyQuery } from '@apollo/client';

import debounce from 'lodash.debounce';

// search query
const SEARCH_QUERY = gql`
  query SEARCH_QUERY($searchTerm: String!) {
    items(where: { title_contains: $searchTerm }) {
      title
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

  const findItemsButChill = debounce(findItems, 450);

  const onChangeHandler = event => {
    setTerm(event.target.value);
    findItemsButChill({
      variables: {
        searchTerm: term,
      },
    });
  };

  console.log(data);

  return (
    <input
      type='text'
      placeholder='Search...'
      onChange={onChangeHandler}
    />
  );
}
