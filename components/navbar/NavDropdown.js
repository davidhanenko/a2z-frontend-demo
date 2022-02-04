import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

import { useNav } from '../../context/navState';
import useWindowDimensions from '../../lib/windowDimensions';
import { formatUrlToRoute } from '../../helpers/formatUrl';
import { TOGGLE_WIDTH } from '../../config';

import {
  DropdownBtnStyles,
  DropdownItemStyles,
  DropdownMenuStyles,
  NavDropdownStyles,
} from './NavDropdownStyles';

// navbar dropdown item
const DropdownItem = React.forwardRef(
  ({ href, onClick, dropdownItem }, ref) => {
    // item title
    const title = dropdownItem.title;
    // item 1st image
    const imgUrl =
      dropdownItem.category[0]?.singleItem[0]?.image[0]
        ?.url;

    const { closeSideNav } = useNav();
    return (
      <DropdownItemStyles>
        <a
          href={href}
          onClick={() => closeSideNav()}
          ref={ref}
        >
          <div className='item-title-img'>
            <Image
              src={imgUrl}
              alt={title}
              width={25}
              height={25}
            />
            <p>{title}</p>
          </div>
        </a>
      </DropdownItemStyles>
    );
  }
);

// navbar dropdown
const NavDropdown = React.forwardRef(function NavDropdown(
  props,
  ref
) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { navOpen } = useNav();
  const { width } = useWindowDimensions();

  const router = useRouter();

  //  props from Nav
  const { href, title, items } = props;

  const showDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleMouseEnter = () => {
    !navOpen && setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    !navOpen && setDropdownOpen(false);
  };

  useEffect(() => {
    let isMounted = true;
    if (width >= TOGGLE_WIDTH) {
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
          href={href}
          ref={ref}
          className={
            router.asPath.split('/')[1] === title
              ? 'active-link'
              : ''
          }
        >
          {title}
        </a>
        <DropdownBtnStyles
          type='button'
          onClick={showDropdown}
          disabled={!navOpen || width > TOGGLE_WIDTH}
        >
          {dropdownOpen && navOpen ? (
            <MdExpandLess />
          ) : (
            <MdExpandMore />
          )}
        </DropdownBtnStyles>
      </div>

      {dropdownOpen && (
        <DropdownMenuStyles isDropdownOpen={dropdownOpen}>
          {items?.map(item => (
            <Link
              href={{
                pathname: `/${title}/[items]`,
                query: {
                  items: `${formatUrlToRoute(item.title)}`,
                },
              }}
              key={item.id}
              passHref
            >
              <DropdownItem dropdownItem={item} />
            </Link>
          ))}
        </DropdownMenuStyles>
      )}
    </NavDropdownStyles>
  );
});

export default NavDropdown;
