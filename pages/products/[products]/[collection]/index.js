import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import SubCategoryCollection from '../../../../components/items/items-page/sub-category-collection/SubCategoryCollection';
import { formatUrlToDbName } from '../../../../helpers/formatUrl';
import { PaginationStateProvider } from '../../../../context/paginationState';
import Pagination from '../../../../components/shared/pagination/Pagination';
import Loader from '../../../../components/shared/loader/Loader';

const PAGINATION_QUERY = gql`
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

export default function ProductsPage({ query }) {
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

  const items = query.products;
  const collection = query.collection;

  // url for pagination component
  const currentUrl = `${service}/${items}/${collection}`;

  // current page
  const page = parseInt(query.page);

    if (loading) return <Loader />;
    if (error) return <p>Error: {error.message}</p>;

  return (
    <PaginationStateProvider>
      <Pagination
        page={page || 1}
        currentUrl={currentUrl}
        itemsCount={itemsCount}
      />
      <SubCategoryCollection
        service={service}
        items={items}
        collection={collection}
        page={page || 1}
      />
    </PaginationStateProvider>
  );
}
