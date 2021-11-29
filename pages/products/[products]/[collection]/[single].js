import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { formatUrlToDbName } from '../../../../helpers/formatUrl';
import SingleItem from '../../../../components/items/items-page/single-item/SingleItem';

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($item: String!) {
    single_item: singleItems(where: { item_title: $item }) {
      id
      item_title
      price
      description
      size_prices(sort: "size:asc") {
        id
        size
        price
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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const singleItem =  data?.single_item[0];
  
  return (
      <SingleItem singleItem={singleItem} />
  );
}
