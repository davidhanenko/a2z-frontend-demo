import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import Loader from 'react-loader-spinner';
import {
  PaginationStateProvider,
} from '../../context/paginationState';

import AllSearchResults from '../../components/navbar/search/search-page/AllSearchResults';
import Pagination from '../../components/shared/pagination/Pagination';

// search query
const SEARCH_PAGINATION_QUERY = gql`
  query SEARCH_PAGINATION_QUERY(
    $searchTerm: String!
  ) {
    singleItems(
      where: {
        _or: [
          { item_title_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
      }
    ) {
      id
    }
  }
`;


const PaginationStyles = styled.div`
  margin-top: 15rem;
`;

export default function Search({ query }) {
  const page = parseInt(query.page);
  const term = query.search;

  const { data, loading, error } = useQuery(
    SEARCH_PAGINATION_QUERY,
    {
      variables: {
        searchTerm: term,
      },
    }
  );

  const itemsCount = data?.singleItems?.length;

  // url for pagination component
  const currentUrl = `search/${term}`;

  if (loading) return <Loader />;

  return (
    <PaginationStateProvider>
      <PaginationStyles>
        <Pagination
          page={page || 1}
          currentUrl={currentUrl}
          itemsCount={itemsCount}
        />
      </PaginationStyles>
      <AllSearchResults
        term={term}
        page={page || 1}
        sort={'item_title:desc'}
      />
    </PaginationStateProvider>
  );
}

export async function getServerSideProps(props) {
  let layout = 'main';

  return {
    props: {
      layout,
    },
  };
}
