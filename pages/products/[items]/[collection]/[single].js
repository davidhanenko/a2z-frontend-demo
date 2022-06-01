import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { formatUrlToDbName } from '../../../../helpers/formatUrl';
import SingleItem from '../../../../components/items/items-page/single-item/SingleItem';
import LoaderContainer from '../../../../components/shared/loaders/loader-container/LoaderContainer';

export const SINGLE_ITEM_QUERY = gql`
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

export default function SingleProductPage({ query }) {
  const { data, error, loading } = useQuery(
    SINGLE_ITEM_QUERY,
    {
      variables: {
        item: formatUrlToDbName(query.single),
      },
    }
  );

  const singleItem = data?.singleItems[0];

  if (loading) return <LoaderContainer height={'40rem'} />;

   if (error) {
     toast.error(
       'An unexpected while loading the page, please try again'
     );
   }

  return <SingleItem singleItem={singleItem} />;
}
