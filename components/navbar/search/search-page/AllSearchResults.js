import Link from 'next/link';
import Image from 'next/image';
import {
  AllSearchResultsStyles,
  FoundItemStyles,
} from './AllSearchResultsStyles';

export default function AllSearchResults({
  foundItems,
  term,
}) {
  return (
    <>
      <h1>
        All items found for <span>{term}</span>
      </h1>
      <h1>
        All items found for <span>{term}</span>
      </h1>
      <AllSearchResultsStyles>
        {foundItems.map(item => (
          <FoundItemStyles key={item.id}>
            <Image
              src={item?.image[0]?.url}
              alt={item.itemTitle}
              width={200}
              height={200}
            />
            <h3>{item.itemTitle}</h3>
            <p>from...</p>
          </FoundItemStyles>
        ))}
      </AllSearchResultsStyles>
    </>
  );
}
