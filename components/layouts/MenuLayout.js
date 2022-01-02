import styled from 'styled-components';
import PropTypes from 'prop-types';

import { MenuStateProvider } from '../../context/menuState';

import { GlobalStyles } from './GlobalStyles';
import Header from './partials/header/Header';
import Footer from './partials/footer/Footer';
import ItemsMenu from '../menu/ItemsMenu';
import GoToTop from './partials/gototop/GoToTop';

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
      <GoToTop />
      <Footer />
    </>
  );
}

MenuLayout.propTypes = {
  children: PropTypes.any,
};
