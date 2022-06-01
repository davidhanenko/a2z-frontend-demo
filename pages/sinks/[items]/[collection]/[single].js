import { useQuery } from '@apollo/client';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { formatUrlToDbName } from '../../../../helpers/formatUrl';
import SingleItem from '../../../../components/items/items-page/single-item/SingleItem';
import LoaderContainer from '../../../../components/shared/loaders/loader-container/LoaderContainer';

import { SINGLE_ITEM_QUERY } from '../../../products/[items]/[collection]/[single]';

export default function SingleSinkPage({ query }) {
  const { data, error, loading } = useQuery(
    SINGLE_ITEM_QUERY,
    {
      variables: {
        item: formatUrlToDbName(query.single),
      },
    }
  );

  const singleItem = data?.singleItems[0];

  if (error) {
    toast.error(
      'An unexpected while loading the page, please try again'
    );
  }

  if (loading) return <LoaderContainer height={'40rem'} />;

  return <SingleItem singleItem={singleItem} />;
}
