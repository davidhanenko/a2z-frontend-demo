import { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import { MdSearch } from 'react-icons/md';

import { useScroll } from '../../lib/useScroll';

import { SearchStyles } from './SearchStyles';

// search query
const SEARCH_QUERY = gql`
  query SEARCH_QUERY($searchTerm: String!) {
    items(
      where: {
        _or: [
          { title_contains: $searchTerm }
          {
            items_categories: {
              category_title_contains: $searchTerm
            }
          }
        ]
      }
    ) {
      title
      category: items_categories {
        categoryTitle: category_title
      }
    }
  }
`;

export default function Search({ offset }) {
  const [text, setText] = useState('');
  const [isScroll, setIsScroll] = useState(false);

  const { scrollRef } = useScroll();

  const handleScrollPos = () => {
    if (
      window.pageYOffset > 10 &&
      window.pageYOffset < window.innerHeight
    ) {
      window.pageYOffset !== scrollRef.current.scrollPos &&
        window.pageYOffset - scrollRef.current.scrollPos >
          100 &&
        setIsScroll(true);

      setTimeout(() => {
        setIsScroll(false);
        scrollRef.current.scrollPos = window.pageYOffset;
      }, 400);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPos);
    return () =>
      window.removeEventListener('scroll', handleScrollPos);
  }, []);

  const onChange = event => {
    setText(event.target.value);
  };

  const { data } = useQuery(SEARCH_QUERY, {
    // fetchPolicy: 'no-cache',
    variables: {
      searchTerm: text,
    },
  });

  console.log(data);

  return (
    <SearchStyles scroll={isScroll}>
      <MdSearch className='search-icon' />
      <input
        type='text'
        placeholder='Search...'
        onChange={onChange}
      />
    </SearchStyles>
  );
}
