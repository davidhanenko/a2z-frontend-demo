import { ItemsSubCategoryStyles } from './ItemsSubCategoryStyles';
import SubCategoryItem from './subcategory-item/SubCategoryItem';

export default function ItemsSubCategory({ subCategory, itemsTitle, service}) {
  return (
    <ItemsSubCategoryStyles>
      <SubCategoryItem subCategory={subCategory} itemsTitle={itemsTitle} service={service} />
    </ItemsSubCategoryStyles>
  );
}
