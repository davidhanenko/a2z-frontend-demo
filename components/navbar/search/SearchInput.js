import { useLazyQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { useEffect, useState } from 'react';

// search query
const SEARCH_QUERY = gql`
  query SEARCH_QUERY($searchTerm: String!) {
    items(where: { title_contains: $searchTerm }) {
      title
    }
  }
`;

export default function SearchInput() {
  const [t, setT] = useState('');

  const [searchItems, { data, loading, error }] =
    useLazyQuery(SEARCH_QUERY, {
      fetchPolicy: 'no-cache',
    });

  // useEffect(() => {
  //   const shouldSearch = t !== '';
  //   if (shouldSearch) {
  //     searchItems();
  //   }
  // }, [t]);

  if (error) console.log('error');
  if (loading) console.log('loading');


  console.log(data);

  const onChange = event => {
    event.preventDefault();
    setT(event.target.value);
    searchItems({
      variables: {
        searchTerm: event.target.value || ' ',
      },
      suspend: false,
    });
  };

  return (
    <input
      type='text'
      placeholder='Search...'
      onChange={onChange}
    />
  );
}
