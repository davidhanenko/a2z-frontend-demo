import React, { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import Link from 'next/link';
import Hamburger from 'hamburger-react';

import useWindowDimensions from '../../../../../lib/windowDimensions';
import { useNav } from '../../../../../context/navState';

import NavDropdown from './NavDropdown';
import { NavStyles, NavButtonStyles } from './NavStyles';
import { TOGGLE_WIDTH } from '../../../../../config';
import Search from '../../../../search/Search';

const PRODUCTS_QUERY = gql`
  query PRODUCTS_QUERY {
    services {
      service
      id
      items {
        id
        title
        category: items_categories(limit: 1) {
          id
          singleItem: single_items(limit: 1) {
            image {
              url
            }
          }
        }
      }
    }
  }
`;

export default function Nav() {
  const { data, error, loading } = useQuery(PRODUCTS_QUERY);

  // services to spread in nav
  const services = data?.services;

  const navRef = useRef(null);

  const {
    navOpen,
    toggleNav,
    closeSideNav,
    navBtnClick,
    setNavBtnClick,
  } = useNav();

  const { width } = useWindowDimensions();

  // close toggled nav on click outside
  useEffect(() => {
    //  click outside nav handler
    const handleClickOutside = event => {
      if (
        navOpen &&
        !navRef?.current?.contains(event.target)
      ) {
        closeSideNav();
      }
    };

    //  click outside nav listener
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
  }, [navOpen]);

  // close nav when width more than 850px/toggleWidth
  useEffect(() => {
    let isMounted = true;
    if (width >= TOGGLE_WIDTH) {
      closeSideNav();
    }
    return () => {
      isMounted = false;
    };
  }, [width]);

  const router = useRouter();

  // link button
  const LinkBtn = React.forwardRef(
    ({ href, title, page }, ref) => {
      return (
        <a
          href={href}
          onClick={() => closeSideNav()}
          ref={ref}
          className={
            router.asPath.split('/')[1] === page
              ? 'active-link'
              : ''
          }
        >
          {title}
        </a>
      );
    }
  );

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <NavStyles
        open={navOpen}
        btnClick={navBtnClick}
        width={width}
        ref={navRef}
      >
        <div className='nav-links'>
          <Link href='/' passHref>
            <LinkBtn title={'home'} page={''} />
          </Link>
          {/* <Link href='/about' passHref>
            <LinkBtn title={'about'} page={'about'} />
          </Link> */}

          {/* items dropdown */}
          {services &&
            services.map(service => (
              <Link
                key={service.id}
                href={`/${service.service}`}
                passHref
              >
                <NavDropdown
                  title={service.service}
                  items={service.items}
                />
              </Link>
            ))}

          <Link href='/contacts' passHref>
            <LinkBtn title={'contacts'} page={'contacts'} />
          </Link>
        </div>
        <NavButtonStyles
          onClick={() => setNavBtnClick(true)}
        >
          <Hamburger
            hideOutline={false}
            label='Show menu'
            toggled={navOpen}
            toggle={toggleNav}
          />
        </NavButtonStyles>
      </NavStyles>
      <Search />
    </>
  );
}
