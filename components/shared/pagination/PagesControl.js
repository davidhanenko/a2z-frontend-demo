import Link from 'next/link';

import { usePagination } from '../../../context/paginationState';

import { PagesControlStyles } from './PaginationStyles';

export default function PagesControl({
  page,
  currentUrl,
  itemsCount,
}) {
  const { itemsPerPage } = usePagination();

  const pageCount = Math.ceil(itemsCount / itemsPerPage);

  return (
    <PagesControlStyles>
      <Link href={`/${currentUrl}/?page=${+page - 1}`}>
        <a aria-disabled={page <= 1}>&lt; Prev</a>
      </Link>
      {/* create an array of length equal to pages number */}
      {pageCount &&
        Array.from(Array(pageCount)).map((el, i) => (
          <Link
            key={i}
            href={`/${currentUrl}/?page=${i + 1}`}
          >
            <a aria-disabled={page === i + 1}>{i + 1}</a>
          </Link>
        ))}
      <Link href={`/${currentUrl}/?page=${+page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next &gt;</a>
      </Link>
    </PagesControlStyles>
  );
}
