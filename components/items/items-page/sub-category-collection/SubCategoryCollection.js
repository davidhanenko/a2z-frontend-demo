import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import Head from 'next/head';

import capitalizeStr from '../../../../helpers/capitalizeStr';

import CollectionItem from './collection-item/CollectionItem';
import { SubCategoryCollectionStyles } from './SubCategoryCollectionStyles';
import { formatUrlToDbName } from '../../../../helpers/formatUrl';
import Loader from '../../../shared/loader/Loader';

const ITEMS_SUBCATEGORY_COLLECTION_QUERY = gql`
  query ITEMS_SUBCATEGORY_COLLECTION_QUERY($collection: String!) {
    itemsCategory: itemsCategories(where: { category_title: $collection }) {
      subCategoryTitle: category_title
      id
      singleItems: single_items {
        id
        item_title
        price
        description
        image {
          url
        }
      }
    }
  }
`;

export default function SubCategoryCollection({ items, collection }) {
  const { data, error, loading } = useQuery(
    ITEMS_SUBCATEGORY_COLLECTION_QUERY,
    {
      variables: {
        collection: formatUrlToDbName(collection),
      },
    }
  );

  // subcategory collection data
  const subCategoryCollection = data?.itemsCategory[0];

  if (loading) return <Loader />;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <SubCategoryCollectionStyles>
      <Head>
        <title>
          {capitalizeStr(subCategoryCollection.subCategoryTitle)} - A2Z
        </title>
      </Head>
      <h3 className='collection-title'>
        {subCategoryCollection.subCategoryTitle}
      </h3>
      <div className='collection-container'>
        {subCategoryCollection.singleItems.map(item => (
          <CollectionItem
            key={item.id}
            item={item}
            items={items}
            collection={collection}
          />
        ))}
      </div>
    </SubCategoryCollectionStyles>
  );
}
