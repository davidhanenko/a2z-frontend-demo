import { useQuery } from '@apollo/client';
import Loader from 'react-loader-spinner';
import { SEARCH_QUERY } from '../../components/navbar/search/search-input/SearchInput';
import AllSearchResults from '../../components/navbar/search/search-page/AllSearchResults';


export default function Search({ query }) {
  const term = query.search;

  const { data, loading, error } = useQuery(SEARCH_QUERY, {
    variables: {
      searchTerm: term,
    },
  });

  const foundItems = data?.singleItems || [];

if(loading) return <Loader />
  return (
    <AllSearchResults foundItems={foundItems} term={term} />
  );
}

export async function getServerSideProps(props) {
  let layout = 'main';

  return {
    props: {
      layout,
    },
  };
}
