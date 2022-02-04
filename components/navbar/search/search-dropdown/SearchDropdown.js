import Link from 'next/link';
import { formatUrlToRoute } from '../../../../helpers/formatUrl';

export default function SearchDropdown({ foundItems }) {
  console.log(foundItems);

  return (
    <ul>
      {foundItems.map(el => (
        <Link
        key={el.id}
          href={{
            pathname: `/[...]/[item]`,
            query: {
              item: `${formatUrlToRoute(
                el.itemTitle
              )}`,
            },
          }}
        >
          {el.itemTitle}
        </Link>
      ))}
    </ul>
  );
}
