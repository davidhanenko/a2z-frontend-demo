import { useQuery } from '@apollo/client';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { formatUrlToDbName } from '../../../helpers/formatUrl';

import LoaderContainer from '../../../components/shared/loaders/loader-container/LoaderContainer';
import ItemsByCategory from '../../../components/items/items-page/items-by-category/ItemsByCategory';
import { ALL_ITEMS_QUERY } from '../../products/[items]';

export default function ToolsCategoryPage({ query }) {
  const { data, error, loading } = useQuery(
    ALL_ITEMS_QUERY,
    {
      variables: {
        service: 'tools',
        itemsCategory: formatUrlToDbName(query.items),
      },
    }
  );

  const items = data?.services[0]?.items[0];
  const service = 'tools';

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
