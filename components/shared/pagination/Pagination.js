import { useState } from 'react';
import Link from 'next/link';

import { usePagination } from '../../../context/paginationState';

import { perPageDefault } from '../../../config';
import {
  PagesInputStyles,
  PaginationStyles,
  PagesControlStyles,
} from './PaginationStyles';

function PagesInput() {
  const { itemsPerPage, setItemsPerPage } = usePagination();

  const onSelect = e => setItemsPerPage(parseInt(e.target.value));


  return (
    <PagesInputStyles>
      <span>Show</span>
      <select name='pages' value={itemsPerPage} onChange={onSelect}>
        <option value='2'>2</option>
        <option value='4'>4</option>
        <option value='6'>6</option>
      </select>
    </PagesInputStyles>
  );
}

export default function Pagination({ page, currentUrl, itemsCount }) {
  const { itemsPerPage } = usePagination();

  const pageCount = Math.ceil(itemsCount / itemsPerPage);

  return (
    <PaginationStyles>
      <PagesInput />
      <PagesControlStyles>
        <Link href={`/${currentUrl}/?page=${+page - 1}`}>
          <a aria-disabled={page <= 1}>&lt; Prev</a>
        </Link>
        {/* create an array of length equal to pages number */}
        {pageCount &&
          Array.from(Array(pageCount)).map((el, i) => (
            <Link key={i} href={`/${currentUrl}/?page=${i + 1}`}>
              <a aria-disabled={page === i + 1}>{i + 1}</a>
            </Link>
          ))}
        <Link href={`/${currentUrl}/?page=${+page + 1}`}>
          <a aria-disabled={page >= pageCount}>Next &gt;</a>
        </Link>
      </PagesControlStyles>
    </PaginationStyles>
  );
}
