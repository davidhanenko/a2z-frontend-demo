import Link from 'next/link';
import { formatUrlToRoute } from '../../../../helpers/formatUrl';

export default function SearchDropdown({ foundItems }) {
  console.log(foundItems);

  return (
    <ul>
      {foundItems.map(item => (
        <Link
          key={item.id}
          href={{
            pathname: `/[service]/[items]/[collection]/[singleItem]`,
            query: {
              collection: `${formatUrlToRoute(
                item.category[0].categoryTitle
              )}`,
              items: `${formatUrlToRoute(
                item.category[0].items[0].title
              )}`,
              service: `${formatUrlToRoute(
                item.category[0].items[0].services[0]
                  .service
              )}`,
              singleItem: `${formatUrlToRoute(
                item.itemTitle
              )}`,
            },
          }}
        >
          {item.itemTitle}
        </Link>
      ))}
    </ul>
  );
}
