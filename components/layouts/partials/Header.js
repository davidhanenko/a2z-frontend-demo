import Link from 'next/link';

import { NavStateProvider } from '../../../context/navState';
import Nav from '../../navbar/Nav';
import { HeaderStyles, Logo} from './HeaderStyles';


export default function Header() {
  return (
    <NavStateProvider>
      <HeaderStyles>
        <div className='navbar'>
          <Logo>
            <Link href='/'>a2z</Link>
          </Logo>
          <Nav />
        </div>
      </HeaderStyles>
    </NavStateProvider>
  );
}
