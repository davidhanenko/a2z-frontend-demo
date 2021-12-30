import Link from 'next/link';

import { PaginationStyles } from './PaginationStyles';
import { perPage } from '../../../config';

export default function Pagination({ page, currentUrl, itemsCount }) {
  const pageCount = Math.ceil(itemsCount / perPage);

  return (
    <PaginationStyles>
      <Link href={`/${currentUrl}/?page=${+page - 1}`}>
        <a aria-disabled={page <= 1}>← Prev</a>
      </Link>

      {Array.from(Array(3)).map((el, i) => (
        <Link key={i} href={`/${currentUrl}/?page=${i + 1}`}>
          <a aria-disabled={page === i+1}>{i + 1}</a>
        </Link>
      ))}

      <Link href={`/${currentUrl}/?page=${+page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next →</a>
      </Link>
    </PaginationStyles>
  );
}
