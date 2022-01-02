import { useEffect, useState } from 'react';

import { GoToTopButtonStyles } from './GoToTopStyles';
import { MdKeyboardArrowUp } from 'react-icons/md';

export default function GoToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleBtnVisibility = () => {
      window.pageYOffset > 200 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', toggleBtnVisibility);

    return () => window.removeEventListener('scroll', toggleBtnVisibility);
  }, []);

  return (
    <GoToTopButtonStyles onClick={handleClick} visible={isVisible}>
      <p className='btn-icon'>
        <MdKeyboardArrowUp size='3rem' />
      </p>
    </GoToTopButtonStyles>
  );
}
