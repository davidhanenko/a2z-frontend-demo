import Link from 'next/link';
import { formatUrlToRoute } from '../../../../helpers/formatUrl';

export default function SearchDropdown({ foundItems }) {
  console.log(foundItems);

  return (
    <ul>
      {foundItems.map(el => (
        <Link
          href={{
            pathname: `[...items]/[item]`,
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
