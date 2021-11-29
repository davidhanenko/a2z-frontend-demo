import Item from './item/Item';
import { ItemsStyles } from './ItemsStyles';

export default function Items({ allServiceItems, service }) {

  return (
    <ItemsStyles>
      {allServiceItems.map(serviceItems => (
        <Item key={serviceItems.id} serviceItems={serviceItems} service={service} />
      ))}
    </ItemsStyles>
  );
}
