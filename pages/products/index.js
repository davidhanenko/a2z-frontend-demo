import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import Items from '../../components/items/items-page/items/Items';
import Loader from '../../components/shared/loader/Loader';
import Pagination from '../../components/shared/pagination/Pagination';

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

  const allProducts = data?.services[0]?.items;
  const service = 'products';

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Pagination page={1} />
      <Items allServiceItems={allProducts} service={service} />;
    </>
  );
}
