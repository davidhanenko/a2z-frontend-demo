import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { usePagination } from '../../../context/paginationState';
import LoaderContainer from '../../shared/loaders/loader-container/LoaderContainer';
import FoundItem from './found-item/FoundItem';
import {
  AllSearchResultsStyles,
  SearchResultsContainerStyles,
} from './AllSearchResultsStyles';

// search query
const SEARCH_QUERY = gql`
  query SEARCH_QUERY(
    $searchTerm: String!
    $limit: Int
    $start: Int = 0
    $sort: String
  ) {
    singleItems(
      where: {
        _or: [
          { item_title_contains: $searchTerm }
          { description_contains: $searchTerm }
        ]
      }
      start: $start
      limit: $limit
      sort: $sort
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

// search results component
export default function AllSearchResults({ term, page }) {
  const { itemsPerPage, sortItemsBy } = usePagination();

  const { data, loading, error } = useQuery(SEARCH_QUERY, {
    variables: {
      searchTerm: term,
      limit: itemsPerPage,
      start: page * itemsPerPage - itemsPerPage,
      sort: sortItemsBy,
    },
  });

  const foundItems = data?.singleItems || [];

  if (loading) return <LoaderContainer height={'30rem'} />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <SearchResultsContainerStyles>
      <h1>
        All items found for <span>{term}</span>
      </h1>

      <AllSearchResultsStyles>
        {foundItems.map(item => (
          <FoundItem key={item?.id} item={item} />
        ))}
      </AllSearchResultsStyles>
    </SearchResultsContainerStyles>
  );
}
