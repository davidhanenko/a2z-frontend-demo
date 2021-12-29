import Link from 'next/link';

export default function Pagination({page}) {
  return (
    <>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>← Prev</a>
      </Link>
      <p>
        Page {page} of ___
      </p>
      <p> ____ Items total</p>
      <Link href={`/products/${page + 1}`}>
        <a>Next →</a>
      </Link>
    </>
  );
}
