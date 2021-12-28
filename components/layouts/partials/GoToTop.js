import { useEffect, useState } from 'react';
import { useScroll } from '../../../lib/useScroll';

import { GoToTopButtonStyles } from './GoToTopStyles';
import { MdKeyboardArrowUp } from 'react-icons/md';

export default function GoToTop() {
  const [visible, setVisible] = useState(false);

  const { scrollRef } = useScroll();

  const handleBtnVisibility = () => {
    let scrollPosition = window.pageYOffset;
    scrollPosition > 200 ? setVisible(true) : setVisible(false);
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleBtnVisibility);
  });

  return (
    <GoToTopButtonStyles onClick={handleClick} visible={visible}>
      <p className='btn-icon'>
        <MdKeyboardArrowUp size='3rem' />
      </p>
    </GoToTopButtonStyles>
  );
}
