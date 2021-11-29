import PropTypes from 'prop-types';
import { MenuStateProvider } from '../../context/menuState';

import { GlobalStyles } from './GlobalStyles';
import Header from './partials/Header';
import ItemsMenu from '../menu/ItemsMenu';
import styled from 'styled-components';

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
`;

export default function MenuLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Header />
      <MenuStateProvider>
        <ItemsMenu />
      </MenuStateProvider>
      <InnerStyles>{children}</InnerStyles>
    </>
  );
}

MenuLayout.propTypes = {
  children: PropTypes.any,
};
