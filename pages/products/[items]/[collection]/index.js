import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { formatUrlToDbName } from '../../../../helpers/formatUrl';

import SubCategoryCollection from '../../../../components/items/items-page/sub-category-collection/SubCategoryCollection';
import { PaginationStateProvider } from '../../../../context/paginationState';
import Pagination from '../../../../components/shared/pagination/Pagination';
import LoaderContainer from '../../../../components/shared/loaders/loader-container/LoaderContainer';

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY($collection: String!) {
    itemsCategory: itemsCategories(
      where: { category_title: $collection }
    ) {
      singleItems: single_items {
        id
      }
    }
  }
`;

export default function ProductsCollectionPage({ query }) {
  const { data, error, loading } = useQuery(
    PAGINATION_QUERY,
    {
      variables: {
        collection: formatUrlToDbName(query.collection),
      },
    }
  );
  const service = 'products';

  const itemsCount =
    data?.itemsCategory[0]?.singleItems?.length;

  const items = query.items;
  const collection = query.collection;

  // url for pagination component
  const currentUrl = `${service}/${items}/${collection}`;

  // current page
  const page = parseInt(query.page);

   if (error) {
     toast.error(
       'An unexpected while loading the page, please try again'
     );
   }

  return (
    <PaginationStateProvider>
      {!loading ? (
        <Pagination
          page={page || 1}
          currentUrl={currentUrl}
          itemsCount={itemsCount}
        />
      ) : (
        <LoaderContainer />
      )}
      <SubCategoryCollection
        service={service}
        items={items}
        collection={collection}
        page={page || 1}
      />
    </PaginationStateProvider>
  );
}
