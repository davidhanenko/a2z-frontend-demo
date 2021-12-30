import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import SubCategoryCollection from '../../../../components/items/items-page/sub-category-collection/SubCategoryCollection';
import { formatUrlToDbName } from '../../../../helpers/formatUrl';
import Pagination from '../../../../components/shared/pagination/Pagination';

// const PAGINATION_QUERY = gql`
//   query PAGINATION_QUERY($collection: String!) {
//     singleItemsConnection(where: { category_title: $collection }) {
//       groupBy {
//         items_category {
//           connection {
//             aggregate {
//               count
//             }
//           }
//         }
//       }
//     }
//   }
// `;
const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY($collection: String!) {
    itemsCategory: itemsCategories(where: { category_title: $collection }) {
      singleItems: single_items {
        id
      }
    }
  }
`;

export default function ProductsPage({ query }) {
  const { data, error, loading } = useQuery(PAGINATION_QUERY, {
    variables: {
      collection: formatUrlToDbName(query.collection),
    },
  });
  const service = 'products';

  const itemsCount = data?.itemsCategory[0]?.singleItems?.length;

  const items = query.products;
  const collection = query.collection;

  const currentUrl = `${service}/${items}/${collection}`;

  const page = parseInt(query.page);

  return (
    <>
      <Pagination
        page={page || 1}
        currentUrl={currentUrl}
        itemsCount={itemsCount}
      />
      <SubCategoryCollection
        service={service}
        items={items}
        collection={collection}
        page={page || 1}
      />
    </>
  );
}
