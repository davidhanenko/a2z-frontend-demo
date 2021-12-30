import Link from 'next/link';
import { PaginationStyles } from './PaginationStyles';

export default function Pagination({ page }) {
  return (
    <PaginationStyles>
      <Link href={`/products/?page=${page - 1}`}>
        <a aria-disabled={+page <= 1}>← Prev</a>
      </Link>
      <p>Page {page} of ___</p>
      <p> ____ Items total</p>
      <Link href={`/products/?page=${page + 1}`}>
        <a>Next →</a>
      </Link>
    </PaginationStyles>
  );
}
