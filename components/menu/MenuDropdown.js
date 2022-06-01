import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

import { useMenu } from '../../context/menuState';

import useWindowDimensions from '../../lib/windowDimensions';
import { formatUrlToRoute } from '../../helpers/formatUrl';

import {
  DropdownStyles,
  DropdownBtnStyles,
  DropdownItemStyles,
  DropdownMenuStyles,
} from './MenuDropdownStyles';

const DropdownItem = React.forwardRef(
  ({ href, onClick, item, setDropdownOpen }, ref) => {
    const { closeMenu } = useMenu();

    return (
      <DropdownItemStyles>
        <a
          href={href}
          onClick={() => {
            closeMenu();
            setDropdownOpen(false);
          }}
          ref={ref}
        >
          {item}
        </a>
      </DropdownItemStyles>
    );
  }
);

const MenuDropdown = React.forwardRef(function MenuDropdown(
  props,
  ref
) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const { isMenuOpen } = useMenu();

  const { width } = useWindowDimensions();

  const router = useRouter();

  const showDropdown = () => setDropdownOpen(!dropdownOpen);

  const handleMouseEnter = () => {
    !isMenuOpen && setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    !isMenuOpen && setDropdownOpen(false);
  };

  // close dropdown if width more than 850px
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
    <DropdownStyles
      onMouseOver={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='dropdown-btns-group'>
        <a
          href={props.href}
          ref={ref}
          className={`${
            router.asPath.split('/')[2] &&
            formatUrlToRoute(router.asPath.split('/')[2]) ==
              formatUrlToRoute(props.dropDownMenuitem)
              ? 'active'
              : ''
          } link-title`}
        >
          {props.dropDownMenuitem}
        </a>
        <DropdownBtnStyles
          type='button'
          onClick={showDropdown}
          disabled={!isMenuOpen || width > 850}
        >
          {dropdownOpen && isMenuOpen ? (
            <MdExpandLess />
          ) : (
            <MdExpandMore />
          )}
        </DropdownBtnStyles>
      </div>

      <DropdownMenuStyles dropdownOpen={dropdownOpen}>
        {props?.categories?.map(category => (
          <Link
            href={{
              pathname: '/[service]/[items]/[collection]',
              query: {
                service: `${formatUrlToRoute(
                  props.service
                )}`,
                items: `${formatUrlToRoute(
                  props.dropDownMenuitem
                )}`,
                collection: `${formatUrlToRoute(
                  category.category
                )}`,
              },
            }}
            key={category.id}
            passHref
          >
            <DropdownItem
              item={category?.category}
              setDropdownOpen={setDropdownOpen}
            />
          </Link>
        ))}
      </DropdownMenuStyles>
    </DropdownStyles>
  );
});

export default MenuDropdown;
