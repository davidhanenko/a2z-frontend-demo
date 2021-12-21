import ItemsCategory from '../items-category/ItemsCategory';
import { ItemsByCategoryStyles } from './ItemsByCategoryStyles';

export default function ItemsByCategory({ items, service }) {
  return (
    <ItemsByCategoryStyles>
      <ItemsCategory items={items} service={service} />
    </ItemsByCategoryStyles>
  );
}
