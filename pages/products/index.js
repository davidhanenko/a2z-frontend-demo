import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';


import Items from '../../components/items/items-page/items/Items';


const PRODUCTS_PAGE_QUERY = gql`
  query PRODUCTS_PAGE_QUERY($service: String) {
    services(where: { service: $service }) {
      items {
        id
        title
        category: items_categories(limit: 4) {
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

export default function ProductsPage({}) {
  const { data, error, loading } = useQuery(PRODUCTS_PAGE_QUERY, {
    variables: {
      service: 'products',
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const allProducts = data?.services[0].items;

  return <Items allServiceItems={allProducts} service={'products'} />;
}
