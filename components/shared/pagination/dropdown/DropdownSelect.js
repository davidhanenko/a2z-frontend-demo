import { useRef, useState, useEffect } from 'react';

import { MdExpandMore, MdExpandLess } from 'react-icons/md';

import { DropdownSelectStyles } from './DropdownSelectStyles';

export default function DropdownSelect({
  options,
  select,
  handleSelect,
}) {

  const [dropdownOpen, setDropdownOpen] = useState(false);

  // ref for side menu container
  const dropdownRef = useRef();
  const btnRef = useRef();

  // toogle dropdown visibility
  const showDropdown = () => setDropdownOpen(!dropdownOpen);

  // handle select of sort option
  const handleDropdownSelect = (e) => {
    setDropdownOpen(false);
    handleSelect(e);
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

  // current select object
  let currentSelect = options.find(
    el => el.option === select
  );

  return (
    <DropdownSelectStyles dropdownOpen={dropdownOpen}>
      <button
        id='sort-btn'
        type='button'
        onClick={showDropdown}
        ref={btnRef}
      >
        {currentSelect.title}
        {dropdownOpen ? <MdExpandLess /> : <MdExpandMore />}
      </button>
      <ul id='sort-dropdown' ref={dropdownRef}>
        {options.map((s, i) => {
          return (
            <li key={i}>
              <button
                className='sort-opt-btn'
                type='button'
                value={s.option}
                onClick={handleDropdownSelect}
              >
                {s.title}
              </button>
            </li>
          );
        })}
      </ul>
    </DropdownSelectStyles>
  );
}
