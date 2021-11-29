import Link from 'next/link';
import Image from 'next/image';

import { formatUrlToRoute } from '../../../../../helpers/formatUrl';

import { ItemStyles, ImageOverlay } from './ItemStyles';

export default function Item({ serviceItems, service }) {
  return (
    <ItemStyles>
      <Link href={{
        pathname: '/[service]/[items]',
        query: {
          service: service,
          items: `${formatUrlToRoute(serviceItems.title)}`
        }
      }}>
        <a>
          <h4 className='service-item-title'>{serviceItems.title}</h4>
          <ImageOverlay />
          {serviceItems.category.map(item => (
            <div key={item.id} className='service-item-image'>
              <Image
                src={item.single_item[0].image[0].url}
                width={100}
                height={100}
                alt={item.single_item[0].item_title}
              />
            </div>
          ))}
        </a>
      </Link>
    </ItemStyles>
  );
}
