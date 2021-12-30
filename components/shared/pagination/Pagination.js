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
      <p>
        Page {page} of {pageCount}
      </p>
      <p> Items total</p>
      <Link href={`/${currentUrl}/?page=${+page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next →</a>
      </Link>
    </PaginationStyles>
  );
}
