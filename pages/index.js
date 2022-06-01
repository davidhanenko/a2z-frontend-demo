import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import Main from '../components/main/Main';
import LoaderContainer from '../components/shared/loaders/loader-container/LoaderContainer';

const SERVICES_QUERY = gql`
  query SERVICES_QUERY {
    services {
      id
      serviceTitle: service
    }
  }
`;

export default function MainPage(props) {
  const { data, loading } = useQuery(SERVICES_QUERY);

  const services = data?.services;

  if (loading) return <LoaderContainer height={'30rem'} />;

  return <Main services={services} />;
}

export async function getServerSideProps(props) {
  let layout = 'main';

  return {
    props: {
      layout,
    },
  };
}
