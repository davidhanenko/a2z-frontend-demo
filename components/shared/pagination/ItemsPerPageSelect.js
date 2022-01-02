import { useRouter } from 'next/router';

import { usePagination } from '../../../context/paginationState';

import { ItemsPerPageSelectStyles } from './PaginationStyles';

export default function ItemsPerPageSelect({ currentUrl }) {
  const { itemsPerPage, setItemsPerPage } = usePagination();

  const router = useRouter();

  const handleSelect = e => {
    setItemsPerPage(parseInt(e.target.value));
    // set items amount to local storage
    localStorage.setItem('showPerPage', e.target.value);
    // switch the page to 1st when change amount of items showed on page
    // console.log(localStorage);
    router.push(`?page=1`);
  };

  return (
    <ItemsPerPageSelectStyles>
      <span>Show</span>
      <select
        name='pages'
        onChange={handleSelect}
        value={itemsPerPage}
      >
        <option value='2'>2</option>
        <option value='4'>4</option>
        <option value='6'>6</option>
      </select>
    </ItemsPerPageSelectStyles>
  );
}
