import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { formatUrlToDbName } from '../../../../helpers/formatUrl';
import SingleItem from '../../../../components/items/items-page/single-item/SingleItem';
import Loader from '../../../../components/shared/loaders/Loader';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($item: String!) {
    singleItems(where: { item_title: $item }) {
      id
      itemTitle: item_title
      price
      description
      sizePrices: size_price {
        ... on ComponentPricesSizePrice {
          id
          size
          price
        }
      }
      image {
        url
      }
    }
  }
`;

export default function ProductsPage({ query }) {
  const { data, error, loading } = useQuery(SINGLE_ITEM_QUERY, {
    variables: {
      item: formatUrlToDbName(query.single),
    },
  });

  const singleItem = data?.singleItems[0];

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return <SingleItem singleItem={singleItem} />;
}
