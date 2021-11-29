import Head from 'next/head';

import capitalizeStr from '../../../../helpers/capitalizeStr';

import CollectionItem from './collection-item/CollectionItem';
import { SubCategoryCollectionStyles } from './SubCategoryCollectionStyles';

export default function SubCategoryCollection({
  itemsCollection,
  items,
  collection,
}) {
  return (
    <SubCategoryCollectionStyles>
      <Head>
        <title>{capitalizeStr(itemsCollection.category)} - A2Z</title>
      </Head>
      <h3 className='collection-title'>{itemsCollection.category}</h3>
      <div className='collection-container'>
        {itemsCollection.single_items.map(item => (
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
