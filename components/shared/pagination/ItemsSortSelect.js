import { useRef, useState, useEffect } from 'react';

import { MdExpandMore, MdExpandLess } from 'react-icons/md';
import { usePagination } from '../../../context/paginationState';
import { SORTING_OPTIONS } from '../../../config';

import { ItemsSortSelectStyles } from './PaginationStyles';

export default function ItemsSortSelect() {
  const { sortItemsBy, setSortItemsBy } = usePagination();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  // ref for side menu container
  const dropdownRef = useRef();
  const btnRef = useRef();

  // toogle dropdown visibility
  const showDropdown = () => setDropdownOpen(!dropdownOpen);

  // handle select of sort option
  const handleSelect = e => {
    setSortItemsBy(e.target.value);
    setDropdownOpen(false);
  };

  // close dropdown on click outside
  useEffect(() => {
    //  click outside handler
    const handleClickOutside = event => {
      if (
        dropdownOpen &&
        !btnRef.current.contains(event.target) &&
        !dropdownRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };

    //  click outside side menu listener
    document.addEventListener(
      'mousedown',
      handleClickOutside
    );

    // cleanup the event listener
    return () => {
      document.removeEventListener(
        'mousedown',
        handleClickOutside
      );
    };
  }, [dropdownOpen]);

  // current sort object
  let currentSort = SORTING_OPTIONS.find(
    el => el.option === sortItemsBy
  );

  return (
    <ItemsSortSelectStyles dropdownOpen={dropdownOpen}>
      <button
        id='sort-btn'
        type='button'
        onClick={showDropdown}
        ref={btnRef}
      >
        {currentSort.title}
        {dropdownOpen ? <MdExpandLess /> : <MdExpandMore />}
      </button>
      <ul id='sort-dropdown' ref={dropdownRef}>
        {SORTING_OPTIONS.map((sort, index) => {
          return (
            <li key={index}>
              <button
                className='sort-opt-btn'
                type='button'
                value={sort.option}
                onClick={handleSelect}
              >
                {sort.title}
              </button>
            </li>
          );
        })}
      </ul>
    </ItemsSortSelectStyles>
  );
}
