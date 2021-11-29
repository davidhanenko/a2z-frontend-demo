import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

import { useNav } from '../../context/navState';
import useWindowDimensions from '../../lib/windowDimensions';
import { formatUrlToRoute } from '../../helpers/formatUrl';

import {
  DropdownBtnStyles,
  DropdownItemStyles,
  DropdownMenuStyles,
  NavDropdownStyles,
} from './NavDropdownStyles';

// navbar dropdown item
const DropdownItem = React.forwardRef(
  ({ href, onClick, dropdownItem }, ref) => {
    const { closeSideNav } = useNav();

    return (
      <DropdownItemStyles>
        <a
          href={href}
          onClick={() => closeSideNav()}
          ref={ref}
        >
          {dropdownItem}
        </a>
      </DropdownItemStyles>
    );
  }
);

const NavDropdown = React.forwardRef(function NavDropdown(props, ref) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { navOpen } = useNav();
  const { width } = useWindowDimensions();

 const router = useRouter();

  const showDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleMouseEnter = () => {
    !navOpen && setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    !navOpen && setDropdownOpen(false);
  };

  useEffect(() => {
    let isMounted = true;
    if (width >= 850) {
      setDropdownOpen(false);
    }
    return () => {
      isMounted = false;
    };
  }, [width]);

  return (
    <NavDropdownStyles
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='dropdown-btns-group'>
        <a
          href={props.href}
          ref={ref}
          className={
            router.asPath.split('/')[1] == props.title
              ? 'active-link link-item'
              : 'link-item'
          }
        >
          {props.title}
        </a>
        <DropdownBtnStyles
          type='button'
          onClick={showDropdown}
          disabled={!navOpen || width > 850}
        >
          {dropdownOpen && navOpen ? <MdExpandLess /> : <MdExpandMore />}
        </DropdownBtnStyles>
      </div>

      {dropdownOpen && (
        <DropdownMenuStyles isDropdownOpen={dropdownOpen}>
          {props?.items?.map(item => (
            <Link
              href={{
                pathname: `/products/[items]`,
                query: {
                  items: `${formatUrlToRoute(item.title)}`,
                },
              }}
              key={item.id}
              passHref
            >
              <DropdownItem dropdownItem={item?.title} />
            </Link>
          ))}
        </DropdownMenuStyles>
      )}
    </NavDropdownStyles>
  );
});

export default NavDropdown;
