import { GoToTopButtonStyles } from './GoToTopStyles';
import { MdKeyboardArrowUp } from 'react-icons/md';

export default function GoToTop(params) {
  return (
    <GoToTopButtonStyles>
      <p>
        <MdKeyboardArrowUp size='3rem' />
      </p>
    </GoToTopButtonStyles>
  );
}
