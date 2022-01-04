import { useRouter } from 'next/router';

import { usePagination } from '../../../context/paginationState';

import { PER_PAGE_OPRIONS } from '../../../config';

import DropdownSelect from './dropdown/DropdownSelect';
import { ItemsPerPageSelectStyles } from './PaginationStyles';

export default function ItemsPerPageSelect({}) {
  const { itemsPerPage, setItemsPerPage } = usePagination();

  const router = useRouter();

  const handleSelect = e => {
    setItemsPerPage(parseInt(e.target.value));
    // set items amount to local storage
    localStorage.setItem('showPerPage', e.target.value);
    // switch the page to 1st when change amount of items showed on page
    router.push(`?page=1`);
  };

  return (
    <ItemsPerPageSelectStyles>
      <p>show</p>
      {itemsPerPage && (
        <DropdownSelect
          options={PER_PAGE_OPRIONS}
          select={itemsPerPage}
          handleSelect={handleSelect}
        />
      )}
    </ItemsPerPageSelectStyles>
  );
}
