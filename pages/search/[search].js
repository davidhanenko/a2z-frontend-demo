import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';

import Loader from 'react-loader-spinner';
import {
  PaginationStateProvider,
} from '../../context/paginationState';

import AllSearchResults from '../../components/search/search-page/AllSearchResults';
import Pagination from '../../components/shared/pagination/Pagination';

// query to found quantity of found items
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

// styles fot the pagination component on search page
const PaginationStyles = styled.div`
  margin-top: calc(var(--navHeight) + var(--searchHeight) + 5rem);
`;

export default function Search({ query }) {
  // current page
  const page = parseInt(query.page);
  // search term
  const term = query.search;

  const { data, loading, error } = useQuery(
    SEARCH_PAGINATION_QUERY,
    {
      variables: {
        searchTerm: term,
      },
    }
  );

  // count of found items
  const itemsCount = data?.singleItems?.length;


  // url for pagination component
  const currentUrl = `search/${term}`;

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;


  return (
    <PaginationStateProvider>
      <PaginationStyles>
        <Pagination
          page={page || 1}
          currentUrl={currentUrl}
          itemsCount={itemsCount}
        />
      </PaginationStyles>
      <AllSearchResults term={term} page={page || 1} />
    </PaginationStateProvider>
  );
}

// set layout MAIN for this page
export async function getServerSideProps(props) {
  let layout = 'main';

  return {
    props: {
      layout,
    },
  };
}
