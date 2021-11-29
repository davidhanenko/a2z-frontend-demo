import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import ItemsByCategory from '../../../components/items/items-page/items-by-category/ItemsByCategory';
import { formatUrlToDbName } from '../../../helpers/formatUrl';

const ALL_PRODUCTS = gql`
  query ALL_PRODUCTS($service: String!, $itemsCategory: String!) {
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
  const { data, error, loading } = useQuery(ALL_PRODUCTS, {
    variables: {
      service: 'products',
      itemsCategory: formatUrlToDbName(query.products)
    },
  });

  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  
  const items = data.services[0].items[0];

  return <ItemsByCategory items={items} />;
}
