import { useRouter } from 'next/router';

import { usePagination } from '../../../context/paginationState';

import { PER_PAGE_OPTIONS } from '../../../config';

import DropdownSelect from './dropdown/DropdownSelect';
import { ItemsPerPageSelectStyles } from './PaginationStyles';

export default function ItemsPerPageSelect({ page }) {
  const { itemsPerPage, setItemsPerPage } = usePagination();

  const router = useRouter();
  // current url
  const currentUrl =
    page === 1
      ? router.asPath
      : router.asPath.split('?').slice(0, -1).join('');

  // select amount of items shown on page
  const handleSelect = e => {
    setItemsPerPage(parseInt(e.target.value));

    // set items amount to local storage
    localStorage.setItem('showPerPage', e.target.value);

    // switch the page to 1st when change amount of items showed on page and page !== 1
    if (page !== 1) {
      router.push(`${currentUrl}?page=1`);
    }
  };

  return (
    <ItemsPerPageSelectStyles>
      <p>show</p>
      {itemsPerPage && (
        <DropdownSelect
          options={PER_PAGE_OPTIONS}
          select={itemsPerPage}
          handleSelect={handleSelect}
        />
      )}
    </ItemsPerPageSelectStyles>
  );
}
