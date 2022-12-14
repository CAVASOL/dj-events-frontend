import React from 'react';
import Link from 'next/link';
import { PER_PAGE } from '@/config/index';

export default function Pagination({ page, totalEvents }) {
  const lastPage = Math.ceil(totalEvents / PER_PAGE);

  return (
    <>
      {page > 1 && (
        <Link href={`/events?page=${page - 1}`}>
          <a className="btn-secondary">Preview</a>
        </Link>
      )}

      {page < lastPage && (
        <Link href={`/events?page=${page + 1}`}>
          <a className="btn-secondary">Next</a>
        </Link>
      )}
    </>
  );
}
