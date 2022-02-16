import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { formatUrlToDbName } from '../../../helpers/formatUrl';

import LoaderContainer from '../../../components/shared/loaders/loader-container/LoaderContainer';
import ItemsByCategory from '../../../components/items/items-page/items-by-category/ItemsByCategory';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY(
    $service: String!
    $itemsCategory: String!
  ) {
    services(where: { service: $service }) {
      service
      items(where: { title: $itemsCategory }) {
        title
        category: items_categories {
          category_title
          id
          single_item: single_items(limit: 1) {
            item_title
            image {
              url
            }
          }
        }
      }
    }
  }
`;

export default function ProductsCategoryPage({ query }) {
  const { data, error, loading } = useQuery(
    ALL_PRODUCTS_QUERY,
    {
      variables: {
        service: 'products',
        itemsCategory: formatUrlToDbName(query.products),
      },
    }
  );

  const items = data?.services[0]?.items[0];
  const service = 'products';

  if (loading) return <LoaderContainer height={'30rem'} />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ItemsByCategory items={items} service={service} />
  );
}
