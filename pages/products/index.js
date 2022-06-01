import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Items from '../../components/items/items-page/items/Items';
import LoaderContainer from '../../components/shared/loaders/loader-container/LoaderContainer';

export const ITEMS_PAGE_QUERY = gql`
  query ITEMS_PAGE_QUERY(
    $service: String
    $limit: Int
    $start: Int = 0
  ) {
    services(where: { service: $service }) {
      items(start: $start, limit: $limit) {
        id
        title
        category: items_categories(limit: 4) {
          id
          singleItem: single_items(limit: 1) {
            itemTitle: item_title
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
  const { data, error, loading } = useQuery(
    ITEMS_PAGE_QUERY,
    {
      variables: {
        service: 'products',
      },
    }
  );

  const allProducts = data?.services[0]?.items;
  const service = 'products';

  if (error) {
    toast.error(
      'An unexpected while loading the page, please try again'
    );
  }

  if (loading) return <LoaderContainer height={'30rem'} />;

  return (
    <Items
      allServiceItems={allProducts}
      service={service}
    />
  );
}
