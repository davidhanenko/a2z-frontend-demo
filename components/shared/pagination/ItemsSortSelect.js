import { usePagination } from '../../../context/paginationState';

import { ItemsSortSelectStyles } from './PaginationStyles';

export default function ItemsSortSelect() {
  const { sortItemsBy, setSortItemsBy } = usePagination();


  const handleSelect = e => {
    setSortItemsBy(e.target.value);
  };

  return (
    <ItemsSortSelectStyles>
      <span>Sort</span>
      <select
        name='sort'
        onChange={handleSelect}
        value={sortItemsBy}
      >
        <option value='item_title:asc'>Name, A-Z</option>
        <option value='item_title:desc'>Name, Z-A</option>
        <option value='created_at:asc'>
          Old to New
        </option>
        <option value='created_at:desc'>
          New to Old
        </option>
      </select>
    </ItemsSortSelectStyles>
  );
}
