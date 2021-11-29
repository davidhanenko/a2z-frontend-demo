import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { formatUrlToDbName } from '../../../../helpers/formatUrl';

import SubCategoryCollection from '../../../../components/items/items-page/sub-category-collection/SubCategoryCollection';

const ITEMS_COLLECTION = gql`
  query ITEMS_COLLECTION($collection: String!) {
    items_category: itemsCategories(where: { category_title: $collection }) {
      category: category_title
      id
      single_items {
        id
        item_title
        price
        description
        image {
          url
        }
      }
    }
  }
`;

export default function ProductsPage({ query }) {
  const { data, error, loading } = useQuery(ITEMS_COLLECTION, {
    variables: {
      collection: formatUrlToDbName(query.collection),
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <SubCategoryCollection itemsCollection={data?.items_category[0]} items={query.products} collection={query.collection}/>
    </>
  );
}
