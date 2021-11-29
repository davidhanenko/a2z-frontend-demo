import ItemsCategory from '../items-category/ItemsCategory';
import { ItemsByCategoryStyles } from './ItemsByCategoryStyles';

export default function ItemsByCategory({ items }) {
  return (
    <ItemsByCategoryStyles>
      <ItemsCategory items={items} />
    </ItemsByCategoryStyles>
  );
}
