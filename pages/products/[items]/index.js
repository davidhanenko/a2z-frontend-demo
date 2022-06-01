import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { formatUrlToDbName } from '../../../helpers/formatUrl';

import LoaderContainer from '../../../components/shared/loaders/loader-container/LoaderContainer';
import ItemsByCategory from '../../../components/items/items-page/items-by-category/ItemsByCategory';

export const ALL_ITEMS_QUERY = gql`
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
    ALL_ITEMS_QUERY,
    {
      variables: {
        service: 'products',
        itemsCategory: formatUrlToDbName(query.items),
      },
    }
  );

  const items = data?.services[0]?.items[0];
  const service = 'products';

  if (error) {
    toast.error(
      'An unexpected while loading the page, please try again'
    );
  }

  if (loading) return <LoaderContainer height={'30rem'} />;

  return (
    <ItemsByCategory items={items} service={service} />
  );
}
