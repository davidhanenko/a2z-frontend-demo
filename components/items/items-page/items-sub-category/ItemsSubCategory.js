import { ItemsSubCategoryStyles } from './ItemsSubCategoryStyles';
import SubCategoryItem from './subcategory-item/SubCategoryItem';

export default function ItemsSubCategory({ subCategory, itemsTitle, service}) {
  return (
    <ItemsSubCategoryStyles>
      <h4 className='subcategory-title'>{subCategory.category_title}</h4>
      <SubCategoryItem subCategory={subCategory} itemsTitle={itemsTitle} service={service} />
    </ItemsSubCategoryStyles>
  );
}
