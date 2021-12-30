import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import Items from '../../components/items/items-page/items/Items';
import Loader from '../../components/shared/loader/Loader';
import Pagination from '../../components/shared/pagination/Pagination';
import { perPage } from '../../config';
import { useRouter } from 'next/dist/client/router';

const PRODUCTS_PAGE_QUERY = gql`
  query PRODUCTS_PAGE_QUERY($service: String, $limit: Int, $start: Int = 0) {
    services(where: { service: $service }) {
      items(start: $start, limit: $limit) {
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

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`;


export default function ProductsPage({}) {
  const { query } = useRouter();
  const page = parseInt(query.page);

  const { data, error, loading } = useQuery(PRODUCTS_PAGE_QUERY, {
    variables: {
      service: 'products',
      limit: perPage,
      start: page * perPage - perPage,
    },
  });

  const allProducts = data?.services[0]?.items;
  const service = 'products';

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Pagination page={page || 1} />
      <Items allServiceItems={allProducts} service={service} page={page || 1} />
      ;
    </>
  );
}
