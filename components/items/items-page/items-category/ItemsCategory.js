import Head from 'next/head';

import capitalizeStr from '../../../../helpers/capitalizeStr';

import ItemsSubCategory from '../items-sub-category/ItemsSubCategory';
import {
  ItemsCategoryStyles,
} from './ItemsCategoryStyles';

export default function ItemsCategory({ items }) {
  const title = items?.title;

  return (
    <ItemsCategoryStyles>
      <Head>
        <title>{capitalizeStr(title)} - A2Z</title>
      </Head>
      <h3>{title}</h3>
      <div className='category-container'>
        {items.category.map(subCategory => (
          <ItemsSubCategory
            key={subCategory.id}
            subCategory={subCategory}
            itemsTitle={title}
          />
        ))}
      </div>
    </ItemsCategoryStyles>
  );
}
