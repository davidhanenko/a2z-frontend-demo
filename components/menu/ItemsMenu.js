import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import { Slant as Hamburger } from 'hamburger-react';

import { useMenu } from '../../context/menuState';
import useWindowDimensions from '../../lib/windowDimensions';

import MenuLink from './MenuLink';
import MenuTree from './MenuTree';
import { ItemsMenuStyles, MenuButtonStyles } from './ItemsMenuStyles';

const SERVICE_MENU_QUERY = gql`
  query SERVICE_MENU_QUERY($service: String!) {
    services(where: { service: $service }) {
      items {
        id
        title
        items_categories {
          id
          category: category_title
        }
      }
    }
  }
`;

export default function ItemsMenu({}) {
  const router = useRouter();
  const service = router.asPath.split('/')[1];

  const { data, error, loading } = useQuery(SERVICE_MENU_QUERY, {
    variables: {
      service: service,
    },
  });

  const { isOpen, setOpen, btnClicked, setBtnClicked, closeMenu } = useMenu();

  // ref for side menu container
  const sideMenuRef = useRef();
  const btnRef = useRef();

  const { width } = useWindowDimensions();

  // close side menu on click outside
  useEffect(() => {
    //  click outside side menu handler
    const handleClickOutside = event => {
      if (
        isOpen &&
        !btnRef.current.contains(event.target) &&
        !sideMenuRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    //  click outside side menu listener
    document.addEventListener('mousedown', handleClickOutside);

    // cleanup the event listener
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // close side menu if width is more than 850px
  useEffect(() => {
    let isMounted = true;
    if (width >= 850) {
      closeMenu();
    }
    return () => {
      isMounted = false;
    };
  }, [width]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const menuItems = data?.services[0]?.items;

  return (
    <>
      <ItemsMenuStyles menuOpen={isOpen} btnClicked={btnClicked}>
        <div className='menu-header'>
          <MenuButtonStyles ref={btnRef} onClick={() => setBtnClicked(true)}>
            <Hamburger
              hideOutline={false}
              label='show menu'
              toggled={isOpen}
              toggle={setOpen}
            />
          </MenuButtonStyles>

          <h3 className='main-title'>{service}</h3>
        </div>

        {/* menu container*/}
        <div className='menu-links'>
          {menuItems?.map(menuItem => (
            <MenuLink menuItem={menuItem} key={menuItem.id} />
          ))}
        </div>

        {/* sidebar menu */}
        <div className='side-menu-links' ref={sideMenuRef}>
          {menuItems?.map(menuItem => (
            <MenuLink
              menuItem={menuItem}
              key={menuItem.id}
              onClick={() => {
                setOpen(false);
              }}
            />
          ))}
        </div>
      </ItemsMenuStyles>

      <MenuTree />
    </>
  );
}
