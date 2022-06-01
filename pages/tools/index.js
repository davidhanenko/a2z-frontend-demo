import { useQuery } from '@apollo/client';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Items from '../../components/items/items-page/items/Items';
import LoaderContainer from '../../components/shared/loaders/loader-container/LoaderContainer';
import { ITEMS_PAGE_QUERY } from '../products';

export default function ToolsPage({}) {
  const service = 'tools';

  const { data, error, loading } = useQuery(ITEMS_PAGE_QUERY, {
    variables: {
      service: service,
    },
  });

  const allTools = data?.services[0]?.items;


    if (error) {
      toast.error(
        'An unexpected while loading the page, please try again'
      );
    }

  if (loading) return <LoaderContainer height={'30rem'} />;

  return (
    <Items allServiceItems={allTools} service={service} />
  );
}
