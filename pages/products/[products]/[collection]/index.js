import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import { formatUrlToDbName } from '../../../../helpers/formatUrl';

import SubCategoryCollection from '../../../../components/items/items-page/sub-category-collection/SubCategoryCollection';
import Loader from '../../../../components/shared/loader/Loader';



export default function ProductsPage({ query }) {

  const service = 'products';

  return (
    <>
      <SubCategoryCollection
        items={query.products}
        collection={query.collection}
        service={service}
      />
    </>
  );
}
