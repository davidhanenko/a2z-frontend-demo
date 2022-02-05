import { useEffect, useState } from 'react';
import { MdSearch } from 'react-icons/md';

import { useScroll } from '../../../lib/useScroll';

import { SearchStyles } from './SearchStyles';
import SearchInput from './search-input/SearchInput';

export default function Search() {
  const [isScroll, setIsScroll] = useState(false);

  const { scrollRef } = useScroll();

  const handleScrollPos = () => {
    if (
      window.pageYOffset > 10 &&
      window.pageYOffset < window.innerHeight
    ) {
      window.pageYOffset !== scrollRef.current.scrollPos &&
        window.pageYOffset - scrollRef.current.scrollPos >
          100 &&
        setIsScroll(true);

      setTimeout(() => {
        setIsScroll(false);
        scrollRef.current.scrollPos = window.pageYOffset;
      }, 400);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScrollPos);
    return () =>
      window.removeEventListener('scroll', handleScrollPos);
  }, []);

  const onChange = event => {
    setText(event.target.value);
  };

  return (
    <SearchStyles scroll={isScroll}>
      <MdSearch className='search-icon' />
      <SearchInput />
    </SearchStyles>
  );
}
