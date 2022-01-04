
import { usePagination } from '../../../context/paginationState';
import { SORTING_OPTIONS } from '../../../config';

import { ItemsSortSelectStyles } from './PaginationStyles';
import DropdownSelect from './dropdown/DropdownSelect';

export default function ItemsSortSelect() {
  const { sortItemsBy, setSortItemsBy } = usePagination();

  // handle select of sort option
  const handleSelect = e => {
    setSortItemsBy(e.target.value);
  };

  
  return (
    <ItemsSortSelectStyles>
      {sortItemsBy && (
        <DropdownSelect
          options={SORTING_OPTIONS}
          select={sortItemsBy}
          handleSelect={handleSelect}
        />
      )}
    </ItemsSortSelectStyles>
  );
}
